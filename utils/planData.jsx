export default [
    {
      id: 1, // ✅ Unique ID
      name: 'Free',
      cost: 0,
      paymentLink:'/dashboard/',
      offering: [
        { value: '✓ Create 3 Free Mock Interviews' },
        { value: '✓ Unlimited Retake Interviews' },
        { value: '⨯ Practice Questions' },
        { value: '⨯ Exclusive App Access' },
        { value: '⨯ Email Support' },
      ],
    },
    {
      id: 2, // ✅ Changed to a unique ID
      name: 'Monthly',
      cost: 7.99,
      paymentLink: 'https://buy.stripe.com/test_dR66pnb4N3h16NW6oo',
      offering: [
        { value: '✓ Create Unlimited Mock Interviews' },
        { value: '✓ Unlimited Retake Interviews' },
        { value: '✓ Practice Questions' },
        { value: '✓ Exclusive App Access' },
        { value: '✓ Email Support' },
      ],
    },
  ];