export default [
  {
    name: "Blog title Finder",
    desc: "When your brian stops thinking,find your blog title here.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/3959/3959542.png",
    aiprompt:
      "Suggest 5 blog topic name  based on the give details and outline , give answers in bullet with Rich Text Editor Format ",
    gibberish: "suggest-blog-title",
    form: [
      {
        label: "Enter about your blog details",
        field: "input",
        name: "details",
        required: true,
      },
      {
        label: "Enter about your blog outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Blog Topics Ideas",
    desc: "Take idea from me,Helper suggests you the best.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2988/2988036.png",
    aiprompt:
      "Suggest 5 blog topic to user according to the details, give answers in bullet with Rich Text Editor Format",
    gibberish: "blog-topic-suggestion",
    form: [
      {
        label: "Enter about your blog details",
        field: "input",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Blog Content Generator",
    desc: "Generate Sigma Contents from Helper",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2593/2593549.png",
    aiprompt:
      "Generate blog content based on the given details and outline of the topic,give output in  Rich Text Editor Format",
    gibberish: "blog-content-generation",
    form: [
      {
        label: "Enter about your blog details",
        field: "input",
        name: "details",
        required: true,
      },
      {
        label: "Enter about your blog keywords",
        field: "textarea",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Youtube title Finder",
    desc: "When your brian stops thinking find your Youtube title here.",
    category: "youtube",
    icon: "https://cdn-icons-png.flaticon.com/128/1383/1383260.png",
    aiprompt:
      "Suggest 5 Youtube title ideas based on the given details and outline , give answers in bullet with Rich Text Editor Format ",
    gibberish: "suggest-youtube-title",
    form: [
      {
        label: "Enter about your Youtube video details",
        field: "input",
        name: "details",
        required: true,
      },
      {
        label: "Enter about your Youtube video outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Youtube video Content Generator",
    desc: "Helper bro is expert in this may be ,he can help with your content.",
    category: "youtube",
    icon: "https://cdn-icons-png.flaticon.com/128/2522/2522649.png",
    aiprompt:
      "Generate youtube video content based on the given details ,give output in Rich Text Editor Format",
    gibberish: "youtube-content-generation",
    form: [
      {
        label: "Enter about your Youtube title or keywords",
        field: "input",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Code Generator",
    desc: "Helper is a god in programming,ask him anything he could answer anything.",
    category: "coding",
    icon: "https://cdn-icons-png.flaticon.com/128/3242/3242257.png",
    aiprompt:
      "Generate code based on the given topic and programming language  ,give output in Rich Text Editor Format",
    gibberish: "code-generator",
    form: [
      {
        label: "Enter coding topic ",
        field: "input",
        name: "details",
        required: true,
      },
      {
        label: "Enter Programming language ",
        field: "textarea",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Research Paper Searcher",
    desc: "Find  relatable research paper easily",
    category: "research",
    icon: "https://cdn-icons-png.flaticon.com/128/2717/2717575.png",
    aiprompt:
      "Generate 10 reasearch paper names based on the given details and keywords provided,give output in Rich Text Editor format.",
    gibberish: "reasearch-paper-name-generator",
    form: [
      {
        label: "Enter research paper topics",
        field: "input",
        name: "details",
        required: true,
      },
      {
        label: "Enter related keywords of your reasearch paper",
        field: "textarea",
        name: "keywords",
        required: true,
      },
    ],
  },

];
