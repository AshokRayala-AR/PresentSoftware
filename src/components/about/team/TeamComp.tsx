
import TeamCard from "./TeamCard";

function TeamComp() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#101720]">
      <div className="text-white">
        <h2>Meet Our Team</h2>
        <h1>We've Exclusive Team members Meet our Professionals</h1>
      </div>
      <div>
        <TeamCard />
      </div>
      <div>
        <p>Company Fun Fact</p>
        <div className="flex">
          <h1>
            Behind the Scence Surprising Fun Facts About Presence Software
          </h1>
          <div className="">
            <div>
              <h1>5k+</h1>
              <p>Project Complete</p>
            </div>
            <div>
              <h1>3k+</h1>
              <p>Satisficed Clients</p>
            </div>
            <div>
              <h1>85k+</h1>
              <p>Awards Winnigs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamComp;
