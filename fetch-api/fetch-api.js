// fetch is a default browser API that is used to make HTTP requests.

// fetch(url) starts an asynchronous HTTP request to the given URL.
// It immediately returns a Promise — it doesn’t wait for the network call to finish.
// That Promise resolves to a Response object once the server replies.

async function fetchApi() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log(response.status); // 200
    console.log(response.ok);     // true

    // response.json() returns a Promise
    const data = await response.json();

    console.log(data[0].name);    // "Leanne Graham"
  } catch (error) {
    console.error("Error:", error);
  }
}

// What fetch Returns
// The Response object contains:
// status → HTTP status code (e.g., 200, 404).
// ok → Boolean (true if status is 200–299).
// headers → Response headers.
// body → A readable stream of the response data.

// Why We Need .json()
// The body of the Response is a stream — not automatically parsed.
// .json() is a method on the Response object that:
// Reads the stream.
// Parses it as JSON.
// Returns another Promise that resolves to a JavaScript object.

// fetch() → returns a Promise that resolves to a Response object.
// The Response contains metadata + the raw body stream.
// .json() → parses the body into a usable JavaScript object.
