"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const sendMessageWithRetry = async (inputPrompt, retries = 3) => {
    for (let i = 0; i < retries; i++) {
      try {
        const result = await chatSession.sendMessage(inputPrompt);
        return result.response.text();
      } catch (error) {
        console.error(`Attempt ${i + 1} failed:`, error.message);
        if (error.message.includes("503") && i < retries - 1) {
          await new Promise((res) => setTimeout(res, 2000 * (i + 1)));
        } else {
          throw error;
        }
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const questionCount = process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT || 5;
    const inputPrompt = `Job position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExperience}. Based on these, provide ${questionCount} interview questions along with answers in JSON format with 'question' and 'answer' fields.`;

    let responseText = "";

    try {
      responseText = (await sendMessageWithRetry(inputPrompt))
        .replace("```json", "")
        .replace("```", "");

      const jsonResponse = JSON.parse(responseText); // Ensure valid JSON
      setJsonResponse(jsonResponse); // Store parsed data

      // Save to database
      const resp = await db.insert(MockInterview).values({
        mockId: uuidv4(),
        jsonMockResp: responseText,
        jobPosition,
        jobDesc,
        jobExperience,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD-MM-YYYY"),
      }).returning({ mockId: MockInterview.mockId });

      console.log("Inserted Id: ", resp);
      if(resp){
        setOpenDialog(false);
        router.push('/dashboard/interview/'+resp[0]?.mockId)
      }

    } catch (error) {
      console.error("Failed to fetch interview questions:", error.message);
      alert("Failed to generate questions. Please try again later.");
    } finally {
      setLoading(false);
      setOpenDialog(false);
      setJobPosition("");  // Reset form fields
      setJobDesc("");
      setJobExperience("");
    }
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-xl text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-bold text-2xl">
              Tell Us More about Your Job Interview
            </DialogTitle>
            <DialogDescription asChild>
              <form onSubmit={onSubmit}>
                <div>
                  <h2 className="mb-4">
                    Add details about the job role, description, and experience.
                  </h2>

                  <div className="my-3">
                    <label className="block mb-2">Job Role/Position</label>
                    <Input
                      placeholder="e.g., Full Stack Developer"
                      required
                      value={jobPosition}
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label className="block mb-2">
                      Job Description/Tech Stack
                    </label>
                    <Textarea
                      placeholder="e.g., React, Node.js, PostgreSQL"
                      required
                      value={jobDesc}
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label className="block mb-2">Years Of Experience</label>
                    <Input
                      type="number"
                      min="0"
                      max="50"
                      placeholder="e.g., 5"
                      required
                      value={jobExperience}
                      onChange={(event) => setJobExperience(event.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end mt-6">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
