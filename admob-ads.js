function initializeAds() {
    console.log("Simulating Reward Ad...");
  
    setTimeout(() => {
      alert("Reward Ad Finished. Please accept terms.");
      window.location.href = "terms.html";
    }, 3000); // Simulate 3 seconds for reward ad
  }
  