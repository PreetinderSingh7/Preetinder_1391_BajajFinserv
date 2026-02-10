
const axios = require("axios");

const BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

async function testAPI() {
  console.log("🧪 Starting API Tests...\n");

  try {
    
    console.log("1️⃣ GET /health");
    const health = await api.get("/health");
    console.log("✅ Health check passed");
    console.log(health.data);
    console.log("\n-----------------\n");

    
    console.log("2️⃣ POST /bfhl - Fibonacci");
    const fib = await api.post("/bfhl", { fibonacci: 7 });
    console.log("✅ Fibonacci passed");
    console.log(fib.data);
    console.log("\n-----------------\n");

    console.log("3️⃣ POST /bfhl - Prime");
    const prime = await api.post("/bfhl", {
      prime: [2, 4, 7, 9, 11]
    });
    console.log("✅ Prime passed");
    console.log(prime.data);
    console.log("\n-----------------\n");

    console.log("4️⃣ POST /bfhl - LCM");
    const lcm = await api.post("/bfhl", {
      lcm: [12, 18, 24]
    });
    console.log("✅ LCM passed");
    console.log(lcm.data);
    console.log("\n-----------------\n");

    console.log("5️⃣ POST /bfhl - HCF");
    const hcf = await api.post("/bfhl", {
      hcf: [24, 36, 60]
    });
    console.log("✅ HCF passed");
    console.log(hcf.data);
    console.log("\n-----------------\n");

    console.log("6️⃣ POST /bfhl - AI");
    const ai = await api.post("/bfhl", {
      AI: "What is the capital city of canada?"
    });
    console.log("✅ AI passed");
    console.log(ai.data);
    console.log("\n-----------------\n");

    console.log("7️⃣ Invalid operation test");
    try {
      await api.post("/bfhl", { invalid: "test" });
    } catch (err) {
      console.log("✅ Invalid operation handled correctly");
      console.log(err.response.data);
    }
    console.log("\n-----------------\n");

    console.log("8️⃣ Multiple keys test");
    try {
      await api.post("/bfhl", {
        fibonacci: 5,
        prime: [2, 3]
      });
    } catch (err) {
      console.log("✅ Multiple keys handled correctly");
      console.log(err.response.data);
    }

    console.log("\n🎉 ALL TESTS COMPLETED SUCCESSFULLY");
  } catch (error) {
    console.error("❌ Test failed");
    console.error(error.response?.data || error.message);
  }
}

testAPI();
