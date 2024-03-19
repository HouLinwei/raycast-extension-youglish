import { Form, Clipboard, ActionPanel, Action, showToast, Navigation, open } from "@raycast/api";
import { count } from "console";

type Values = {
  word: string;
  country: string;
};

async () => {
  const { text, file, html } = await Clipboard.read();
  console.log(text);
  console.log(file);
  console.log(html);
};

export default function Command() {

  function handleSubmit(values: Values) {
    console.log(values);
    let { word, country } = values;
    open(`https://youglish.com/pronounce/${word}/english/${country}`);
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} title="Go To YouGlish.com" />
        </ActionPanel>
      }
    >
      <Form.TextField id="word" title="Word" placeholder="Enter a word" defaultValue="courage" />
      <Form.Description text="Input your word, and choose the country if you want." />

      <Form.Dropdown id="country" title="Country" defaultValue={"all"}>
        <Form.Dropdown.Item value="all" title="All" />
        <Form.Dropdown.Item value="us" title="United States" />
        <Form.Dropdown.Item value="uk" title="United Kingdom" />
        <Form.Dropdown.Item value="aus" title="Australia" />
        <Form.Dropdown.Item value="ca" title="Canada" />
        <Form.Dropdown.Item value="ie" title="Ireland" />
        <Form.Dropdown.Item value="sco" title="Scotland" />
        <Form.Dropdown.Item value="nz" title="New Zealand" />
      </Form.Dropdown>
    </Form>
  );
}
