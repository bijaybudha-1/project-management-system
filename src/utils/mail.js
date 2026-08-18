import Mailgen from "mailgen";

const emailVerificationMailgenContent = (username, verificationURL) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! we'are excited to have on board.",
      action: {
        instructions:
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

const forgotPasswordMailgenContent = (username, passwordResetURL) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset the password of your account",
      action: {
        instructions:
          "To reset your password click on the following button or link",
        button: {
          color: "#22BC66",
          text: "Reset Password",
        },
      },
      outro:
        "Need help or have question? Just reply to this email, we'd love to help",
    },
  };
};

export { emailVerificationMailgenContent, forgotPasswordMailgenContent };