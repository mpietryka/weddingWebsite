import { Link } from '@mui/material'

export const qandaItems = [
    {
      question: "What should I wear? What is the dress code? What sort of shoes should I wear (or avoid)?",
      answer: (
        <>
          We're going for a relaxed Pub Chic vibe - no suits or evening gowns required!
          <br />
          We're getting married in a pub, so look good, feel comfy, and bring your best vibes!
          <br />
          As we said, wear comfortable shoes - the bride will be wearing block heels, but the groom will be wearing Vans so take your pick.
        </>
      )
    },
    {
      question: "Where is the ceremony?",
      answer: (
        <>
          The ceremony will be held at{' '}
          <Link
            href="https://maps.app.goo.gl/jS5zdmdVHGmrzdzi9"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              fontWeight: 500,
              cursor: 'pointer',
              '&:hover': { color: 'text.primary' }
            }}
          >
            Hackney Town Hall
          </Link>
          {' '}at 10:00am. Please arrive by 9:45am.
        </>
      )
    },
    {
      question: "When is the RSVP deadline?",
      answer: "Please RSVP by the 1st of March so we can have an accurate headcount. 🙂"
    },
    {
      question: "What will the weather be like?",
      answer: <>
      Welcome to London! The weather here can be a bit unpredictable.
      <br />
      Day time temperature should be around 20°C but it does get nippy in the evenings.
      <br />
      Please pack a light jacket or jumper just in case.
      </>
    },
    {
      question: "Is the wedding inside or outside?",
      answer: "The ceremony is indoors and the reception is in the pub. The pub has a garden area if you want some fresh air."
    },
    {
      question: "Can we take photos on our phones during the wedding?",
      answer: (
        <>
          Absolutely! We would love you to snap some photos and share them with us. We will have a fantastic photographer{' '}
          <Link
            href="https://instagram.com/waynela_"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              fontWeight: 500,
              cursor: 'pointer',
              '&:hover': { color: 'text.primary' }
            }}
          >
            Wayne
          </Link>
          , and his pictures will be available on our website 6-8 weeks after the wedding. Please hold off on taking pictures during the ceremony itself. We will also have some disposable cameras for our guests to use throughout the day. 
        </>
      )
    },
    {
      question: "Where is the gift registry?",
      answer: "There is no gift registry but we would gladly accept cold hard cash to add to our honeymoon fund. 😉"
    },
    {
      question: "Where is the honeymoon?",
      answer: "Ibiza, Spain. An all inclusive resort by the beach. 🌞"
    },
    {
      question: "Who should I contact if I have any questions?",
      answer: "If you have any questions, please contact either of us."
    },
  ]