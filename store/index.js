// FOR FAKE USER DATA #TODO SHOULD NOT USE IN PRODUCTION
let dev = true;

export const state = () => ({
  currentUser: dev
    ? null
    : {
        email: "sapw@vino.com",
        history: [
          {
            filename: "the-first-file.pdf",
            lastConversation: randomDate(),
            savedResponses: [
              {
                question: "Explain blah",
                response: "Blah blah blah...",
              },
              {
                question: "Explain blah again",
                response: "Blah blah blah blah...",
              },
            ],
          },
          {
            filename: "The Other File About Nothing.docx",
            lastConversation: randomDate(),
            savedResponses: [
              {
                question: "Explain blah",
                response: "Blah blah blah...",
              },
              {
                question: "Explain blah again",
                response: "Blah blah blah blah...",
              },
            ],
          },
        ],
      },

  showAbout: false,
  showSignUp: false,
});

export const actions = {};
export const getters = {
  getFakeUser(state) {
    if (state.currentUser === null) {
      let fakeUser = {
        email: "sapw@vino.com",
        history: [
          {
            filename: "the-first-file.pdf",
            lastConversation: randomDate(),
            savedResponses: [
              {
                question: "Explain blah",
                response: "Blah blah blah...",
              },
              {
                question: "Explain blah again",
                response: "Blah blah blah blah...",
              },
            ],
          },
          {
            filename: "The Other File About Nothing.docx",
            lastConversation: randomDate(),
            savedResponses: [
              {
                question: "Explain blah",
                response: "Blah blah blah...",
              },
              {
                question: "Explain blah again",
                response: "Blah blah blah blah...",
              },
            ],
          },
        ],
      };
      return fakeUser;
    } else {
      return;
    }
  },
};
export const mutations = {
  TOGGLE_ABOUT: (state) => {
    state.showSignUp = false;
    state.showAbout = !state.showAbout;
  },
  TOGGLE_SIGNUP: (state) => {
    state.showAbout = false;
    state.showSignUp = !state.showSignUp;
  },
  TOGGLE_USER: (state) => {
    if (state.currentUser === null) {
      state.currentUser = {
        email: "sapw@vino.com",
        history: [
          {
            filename: "the-first-file.pdf",
            lastConversation: randomDate(),
            savedResponses: [
              {
                question: "Explain blah",
                response: "Blah blah blah...",
              },
              {
                question: "Explain blah again",
                response: "Blah blah blah blah...",
              },
            ],
          },
          {
            filename: "The Other File About Nothing.docx",
            lastConversation: randomDate(),
            savedResponses: [
              {
                question: "Explain blah",
                response: "Blah blah blah...",
              },
              {
                question: "Explain blah again",
                response: "Blah blah blah blah...",
              },
            ],
          },
        ],
      };
    } else {
      state.currentUser = null;
    }
  },
};

function randomDate() {
  const startDate = new Date("2020-01-01");
  const endDate = new Date("2023-12-31");

  const difference = endDate.getTime() - startDate.getTime();
  const randomDifference = Math.floor(Math.random() * difference);

  const randomDate = new Date(startDate.getTime() + randomDifference);

  return randomDate;
}
