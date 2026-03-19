// Example 1: Fetching Multiple GitHub Users
// Define an async function
async function fetchGitHubUsers() {
  try {
    // Await multiple fetch calls in parallel
    const [octocatRes, defunktRes] = await Promise.all([
      fetch("https://api.github.com/users/octocat"),
      fetch("https://api.github.com/users/defunkt")
    ]);

    // Convert responses to JSON
    const octocat = await octocatRes.json();
    const defunkt = await defunktRes.json();

    // Log results
    console.log("Octocat:", octocat.login, "-", octocat.html_url);
    console.log("Defunkt:", defunkt.login, "-", defunkt.html_url);

  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// fetchGitHubUsers();

// Promise.all runs both fetches in parallel.
// await pauses until both are done.
// If either fails, the catch block handles the error.

// -------------------------------------------------------------------

// Example 2: Sequential Calls
// If you want one call to depend on another:

async function fetchAndThenRepos() {
  try {
    const userRes = await fetch("https://api.github.com/users/octocat");

    if (!userRes.ok) {
      throw new Error(`GitHub API error: ${userRes.status}`);
    }

    const user = await userRes.json();
    console.log("User:", user.login);

    if (!user.repos_url) {
      throw new Error("repos_url is missing in user object");
    }

    const reposRes = await fetch(user.repos_url);
    const repos = await reposRes.json();

    console.log("Number of repos:", repos.length);
  } catch (err) {
    console.error("Error:", err);
  }
}

// fetchAndThenRepos();


// async/await makes API calls look synchronous and easier to read.
// Use Promise.all with await for parallel requests.
// Use sequential await calls when one depends on the other.

async function fetchDogImage() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    console.log("Random Dog Image:", data.message);
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchDogImage();




