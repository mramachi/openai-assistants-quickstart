export let assistantId = "asst_DL7UWUFOqPWLFeHT9RA5SdV5"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
