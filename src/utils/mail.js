import Mailgen from "mailgen";

const emailVerificationMailgenContent = (username, verificationURL) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! we'are excited to have on board.",
      action: {
        instruction:
          "To verify your email please click on the following button.",
        button: {
          color: "#22BC66",
          text: "Verify your mail.",
          link: verificationURL,
        },
      },
      outro:
        "Need help or have question? Just reply to this email, we'd love to help",
    },
  };
};
