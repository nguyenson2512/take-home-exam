import React from "react";

function Home() {
  return (
    <div className="home-container">
      <ol>
        <li>
          Nút "connect wallet": connect with Petra wallet (ví trên blockchain
          network Aptos)
        </li>
        <li>Nút "Log in": allow users to log in using Google</li>
        <li>
          Nút "Launch App": once users log in, send them to the #test2 page
          (this page). if users haven't logged in, don't let them see the second
          page
        </li>
        <li>
          Photoshop phần white part out 'testX' logo và dùng chữ test X => cho
          phần 'Explore and Earn on testX'
        </li>
        <li>The next step is to deploy your work on vercel.</li>
        <li>Block access for IP from Japan.</li>
        <li>
          Share the vercel link along with your code (github link to the repo).
        </li>
      </ol>
      <p className="congratulation">
        Congratulations on passing the coding interview!
      </p>
    </div>
  );
}

export default Home;
