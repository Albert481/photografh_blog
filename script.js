// Blog posts data
const blogPosts = [
  {
    id: 2,
    title: "Services Update",
    slug: "services-updates",
    date: "March 21, 2025",
    author: "Photografh Team",
    excerpt:
      "We're introducing new features for photographers, including package creation and service filtering, alongside security enhancements.",
    content: `
            <h1 class="text-3xl font-bold mb-6">Services Updates</h1>
            
            <p class="text-lg text-gray-700 mb-4">At Photografh, we're constantly working to improve both the user experience and platform security. Our latest update brings significant improvements to how photographers manage their services and how users browse them.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">New Features for Photographers</h2>
            <p class="text-lg text-gray-700 mb-4">We're making it easier for photographers to showcase and manage their services. Here are the latest enhancements:</p>
            
            <ul class="list-disc pl-6 mb-4 text-lg text-gray-700">
                <li class="mb-2"><strong>Photographer Package Creation</strong>: Photographers can now create custom service packages that best fit their offerings, including different tiers and pricing structures.</li>
                <li class="mb-2"><strong>Photographer Package Management</strong>: Easily edit, update, and refine service packages to keep offerings competitive and relevant.</li>
                <li class="mb-2"><strong>Service Filtering</strong>: Clients can now filter services based on criteria such as price, category, and location, making it easier to find the perfect match.</li>
                <li class="mb-2"><strong>Package Comparison</strong>: Clients can now compare multiple service packages side by side, streamlining their decision-making process.</li>
                <li class="mb-2"><strong>Explore Services Page</strong>: A new dedicated page for browsing all available photography and videography services at a glance.</li>
            </ul>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">User Experience Improvements</h2>
            <p class="text-lg text-gray-700 mb-4">We've refined our user interface to make onboarding smoother and more intuitive.</p>
            <ul class="list-disc pl-6 mb-4 text-lg text-gray-700">
                <li class="mb-2"><strong>Phone Number Input Refinement</strong>: Instead of requiring a full international number, users can now input their country code separately, improving clarity during registration.</li>
            </ul>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">Security Enhancements</h2>
            <p class="text-lg text-gray-700 mb-4">User account security is a top priority. We’ve made updates to strengthen password security:</p>
            <ul class="list-disc pl-6 mb-4 text-lg text-gray-700">
                <li class="mb-2"><strong>Stronger Password Requirements</strong>: New passwords must now include an uppercase letter, a lowercase letter, and at least one number.</li>
            </ul>
            
            <p class="text-lg text-gray-700 mb-4">We’re excited to release more features over the next few months! Stay tuned for more updates and let us know your feedback!</p>
        `,
    tags: ["update", "services", "security"],
    image: "./photos/services1.png",
  },
  {
    id: 1,
    title: "Hello World",
    slug: "hello-world",
    date: "March 16, 2025",
    author: "Photografh Team",
    excerpt:
      "Introducing Photografh - a platform connecting photographers with clients, and sharing our current progress.",
    content: `
            <h1 class="text-3xl font-bold mb-6">Hello World</h1>
            
            <p class="text-lg text-gray-700 mb-4">Welcome to the official Photografh blog! We're excited to share our journey as we build a platform that bridges the gap between photographers and clients.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">What is Photografh?</h2>
            <p class="text-lg text-gray-700 mb-4">Photografh is a niche one-stop web application designed to increase photographers' visibility and enhance customer satisfaction in choosing the best photography and videography services.</p>
            
            <p class="text-lg text-gray-700 mb-4">Our platform allows clients to browse different styles of photos or photographers based on their specific requirements. With a standardized search and filter system (including ratings, reviews, categories, location, and budget), comparing services is fast and efficient.</p>
            
            <p class="text-lg text-gray-700 mb-4">Photographers can apply to join our platform by providing their general location, background information, and pricing details. Each application undergoes an approval process, and once approved, the photographer's profile becomes public and available for booking. Photographers can customize their packages using our standardized pricing model, enabling or disabling various charges (for example, weekend surcharges or additional fees for extra edits).</p>
            
            <p class="text-lg text-gray-700 mb-4">After clients browse and select their preferred style and package, they can book a timeslot directly on the photographer's profile page. The photographer must accept this booking within 24 hours. Photografh holds all payments securely until the service has been completed, ensuring peace of mind for both parties.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">Recent Platform Updates</h2>
            <p class="text-lg text-gray-700 mb-4">We've been hard at work improving the Photografh platform. Here are some of our latest updates:</p>
            
            <ul class="list-disc pl-6 mb-4 text-lg text-gray-700">
                <li class="mb-2"><strong>Enhanced Onboarding Process</strong>: We've added a separate UI for country code selection during registration, making it easier for international users to sign up.</li>
                <li class="mb-2"><strong>Federated Social Logins</strong>: Users can now log in using their social media accounts and choose custom usernames for their Photografh profiles.</li>
                <li class="mb-2"><strong>Photographer Availability Feature</strong>: Photographers can now set their availability more precisely, helping clients find the perfect time slot for their sessions.</li>
            </ul>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">What's Next?</h2>
            <p class="text-lg text-gray-700 mb-4">We're continuing to refine the platform based on user feedback and industry needs. Our roadmap includes:</p>
            
            <ul class="list-disc pl-6 mb-4 text-lg text-gray-700">
                <li class="mb-2">Advanced services and package management for photographers</li>
                <li class="mb-2">Integrated booking system with scheduling</li>
                <li class="mb-2">Secure payment system</li>
            </ul>
            
            <p class="text-lg text-gray-700 mb-4">Stay tuned for more updates as we continue to build and improve Photografh. We're committed to creating the best possible platform for connecting talented photographers with clients who need their services.</p>
            
            <p class="text-lg text-gray-700 mb-4">Thank you for joining us on this journey!</p>
        `,
    tags: ["announcement", "update", "platform"],
    image: "./photos/onboarding1.png",
  },
];

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Theme toggle functionality
const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = localStorage.getItem("theme");

  // Set initial theme based on saved preference or system preference
  if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
    document.body.classList.add("dark");
  }

  // Toggle theme when button is clicked
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Save preference to localStorage
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

// Check if we're on the index page
if (
  window.location.pathname === "/" ||
  window.location.pathname.includes("index.html")
) {
  const postsContainer = document.querySelector(".posts-grid .grid");

  if (postsContainer) {
    // Populate posts on the index page
    blogPosts.forEach((post) => {
      const postCard = document.createElement("div");
      postCard.className =
        "post-card group relative overflow-hidden rounded-xl border border-gray-100 border-opacity-10 transition-transform";

      postCard.innerHTML = `
              <a href="post.html?slug=${post.slug}" class="block">
                  <div class="aspect-[2/1] overflow-hidden">
                      <img src="${post.image}" alt="${
        post.title
      }" class="w-full h-full object-cover transition-transform group-hover:scale-[1.05]">
                  </div>
                  <div class="post-card-content p-6">
                      <div class="post-tags mb-4">
                          ${post.tags
                            .map((tag) => {
                              let bgClass = "bg-blue-50";
                              let textClass = "text-blue-500";

                              if (tag === "update" || tag === "platform") {
                                bgClass = "bg-green-50";
                                textClass = "text-green-500";
                              } else if (tag === "announcement") {
                                bgClass = "bg-pink-50";
                                textClass = "text-pink-500";
                              }

                              return `<span class="tag ${bgClass} ${textClass} py-1 px-2 rounded-full text-xs">${tag}</span>`;
                            })
                            .join(" ")}
                      </div>
                      <h2 class="text-h2 font-bold mb-2">${post.title}</h2>
                      <p class="text-gray-500 mb-4 line-clamp-2">${
                        post.excerpt
                      }</p>
                      <div class="post-meta text-sm text-gray-400">
                          <span class="post-date">${post.date}</span>
                          <span class="mx-2">•</span>
                          <span class="post-author">by ${post.author}</span>
                      </div>
                  </div>
              </a>
          `;

      postsContainer.appendChild(postCard);
    });
  }
}

// Check if we're on the post page
if (window.location.pathname.includes("post.html")) {
  // Get the slug from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get("slug");

  // Find the post with the matching slug
  const post = blogPosts.find((post) => post.slug === slug);

  if (post) {
    // Update the page title
    document.title = `${post.title} - Photografh Blog`;

    // Update the post content
    const postTitle = document.getElementById("post-title");
    const postDate = document.getElementById("post-date");
    const postAuthor = document.getElementById("post-author");
    const postContent = document.getElementById("post-content");

    if (postTitle) postTitle.textContent = post.title;
    if (postDate) postDate.textContent = post.date;
    if (postAuthor) postAuthor.textContent = `by ${post.author}`;
    if (postContent) postContent.innerHTML = post.content;

    // Update the post tags
    const tagsContainer = document.querySelector(".post-tags");
    if (tagsContainer) {
      tagsContainer.innerHTML = "";

      post.tags.forEach((tag) => {
        let bgClass = "bg-blue-50";
        let textClass = "text-blue-500";

        if (tag === "update" || tag === "platform") {
          bgClass = "bg-green-50";
          textClass = "text-green-500";
        } else if (tag === "announcement") {
          bgClass = "bg-pink-50";
          textClass = "text-pink-500";
        }

        const tagSpan = document.createElement("span");
        tagSpan.className = `tag ${bgClass} ${textClass} py-1 px-2 rounded-full text-xs`;
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
      });
    }

    // Set up post navigation
    const prevPostLink = document.getElementById("prev-post");
    const nextPostLink = document.getElementById("next-post");

    if (prevPostLink && nextPostLink) {
      const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
      const prevPost = blogPosts[currentIndex - 1];
      const nextPost = blogPosts[currentIndex + 1];

      if (prevPost) {
        prevPostLink.href = `post.html?slug=${prevPost.slug}`;
        prevPostLink.textContent = `← ${prevPost.title}`;
      } else {
        prevPostLink.style.visibility = "hidden";
      }

      if (nextPost) {
        nextPostLink.href = `post.html?slug=${nextPost.slug}`;
        nextPostLink.textContent = `${nextPost.title} →`;
      } else {
        nextPostLink.style.visibility = "hidden";
      }
    }

    // Populate related posts
    const relatedPostsContainer = document.getElementById(
      "related-posts-container"
    );

    if (relatedPostsContainer) {
      // Get posts with similar tags (excluding the current post)
      const relatedPosts = blogPosts
        .filter(
          (p) =>
            p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag))
        )
        .slice(0, 2);

      relatedPosts.forEach((relatedPost) => {
        const postCard = document.createElement("div");
        postCard.className =
          "post-card group relative overflow-hidden rounded-xl border border-gray-100 border-opacity-10 transition-transform";

        postCard.innerHTML = `
                  <a href="post.html?slug=${relatedPost.slug}" class="block">
                      <div class="aspect-[2/1] overflow-hidden">
                          <img src="${relatedPost.image}" alt="${relatedPost.title}" class="w-full h-full object-cover transition-transform group-hover:scale-[1.05]">
                      </div>
                      <div class="post-card-content p-6">
                          <h3 class="text-lg font-bold mb-2">${relatedPost.title}</h3>
                          <p class="text-gray-500 mb-4 line-clamp-2">${relatedPost.excerpt}</p>
                          <div class="post-meta text-sm text-gray-400">
                              <span class="post-date">${relatedPost.date}</span>
                          </div>
                      </div>
                  </a>
              `;

        relatedPostsContainer.appendChild(postCard);
      });
    }
  } else {
    // Handle case where post is not found
    const postTitle = document.getElementById("post-title");
    const postContent = document.getElementById("post-content");

    if (postTitle) postTitle.textContent = "Post Not Found";
    if (postContent)
      postContent.innerHTML =
        '<p class="text-lg text-gray-700 mb-4">Sorry, the requested post could not be found.</p>';

    // Hide post navigation and related posts
    const postNavigation = document.querySelector(".post-navigation");
    const relatedPosts = document.querySelector(".related-posts");

    if (postNavigation) postNavigation.style.display = "none";
    if (relatedPosts) relatedPosts.style.display = "none";
  }
}
