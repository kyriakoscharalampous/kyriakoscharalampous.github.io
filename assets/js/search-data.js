// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed journal articles in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Research projects and grants.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses taught across institutions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download my full CV or browse the summary below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Latest updates, awards, and announcements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-honored-with-the-top-viewed-article-award-from-psychology-in-the-schools-for-being-among-the-most-read-newly-published-articles-in-the-journal-between-january-december-2023",
          title: 'Honored with the Top-Viewed Article Award from Psychology in the Schools for being...',
          description: "",
          section: "News",},{id: "news-recipient-of-a-university-of-cyprus-internal-research-grant-60-000-for-the-project-developing-and-evaluating-an-ai-supported-differentiated-teaching-protocol-to-support-teaching-and-learning-of-primary-school-algebra-ai-dtp",
          title: 'Recipient of a University of Cyprus internal research grant (€60,000) for the project...',
          description: "",
          section: "News",},{id: "projects-ai-supported-differentiated-teaching-protocol",
          title: 'AI-Supported Differentiated Teaching Protocol',
          description: "Developing and evaluating an AI-supported differentiated teaching protocol for primary school algebra.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_ai_dtp/";
            },},{id: "projects-prevalence-correlates-and-prevention-of-bullying-and-cyberbullying",
          title: 'Prevalence, Correlates, and Prevention of Bullying and Cyberbullying',
          description: "A United Nations coordinated study examining bullying across communities in Cyprus.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_un_bullying/";
            },},{id: "projects-social-ecological-diathesis-stress-model-of-bullying",
          title: 'Social-Ecological Diathesis-Stress Model of Bullying',
          description: "Examining personal vulnerability factors mediating the effect of bullying on adolescent psychopathology.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_diathesis_stress/";
            },},{id: "projects-parameters-of-bullying-and-cyber-bullying-in-childhood-and-adolescence",
          title: 'Parameters of Bullying and Cyber-bullying in Childhood and Adolescence',
          description: "A longitudinal study examining bullying parameters in childhood and adolescence.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_longitudinal_bullying/";
            },},{id: "teaching-neapolis-university-pafos",
          title: 'Neapolis University Pafos',
          description: "Graduate courses in psychology and education.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/1_neapolis_2019/";
            },},{id: "teaching-theological-school-of-the-church-of-cyprus",
          title: 'Theological School of the Church of Cyprus',
          description: "Graduate courses in research methodology and statistics.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2_theological_2023/";
            },},{id: "teaching-university-of-cyprus",
          title: 'University of Cyprus',
          description: "Graduate course in educational statistics.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/3_ucy_2024/";
            },},{id: "teaching-neapolis-university-pafos",
          title: 'Neapolis University Pafos',
          description: "Graduate courses in learning, personality and independent research.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/4_neapolis_2024/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B.%63%68%61%72%61%6C%61@%6B%79%72%69%61%6B%6F%73%63%68%61%72%61%6C%61%6D%70%6F%75%73.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=OnhNSw4AAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-8618-3092", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kyriakos-charalampous-ph-d-0a3a7891", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Kyriakos-Charalampous-2/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
