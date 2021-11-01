import { Flex } from "../../components/Container";
import Theme from "../../Utils/theme";

const ChangeLog = () => {
  const data = [
    {
      version: "1.0 🚀",
      changes: (
        <>
          <li>🚀 Game Launched!</li>
        </>
      ),
    },
    {
      version: "1.1 🔥",
      changes: (
        <>
          <li>🖼️ Overall UI and fonts enhanced.</li>
          <li>
            🏠 Create Room option available(Play &gt; Friends &gt; Battle &gt;
            Create
          </li>
          <li>🐛 Bugs fixed.</li>
          <li>🤖 Exit button integrated with Android back gesture.</li>
        </>
      ),
    },
    {
      version: "1.2 🌀",
      changes: (
        <>
          <li>🖼️ Overall UI and fonts enhanced.</li>
          <li>
            🏠 Create Room option available (Play &gt; Friends &gt; Battle &gt;
            Create Room).
          </li>
          <li>🤖 Exit button integrated with Android back gesture.</li>
          <li>🥈 Google Play achievements added.</li>
          <li>🪙 Double coins and offers on In-App-Purchases.</li>
          <li>🐛 Bugs fixed.</li>
        </>
      ),
    },
    {
      version: "1.3 🌈",
      changes: (
        <>
          <li>💰 Limited period offers on In-App Purchases</li>
          <li>🤑 Special discounts on Blade and their upgrades</li>
          <li>🪙 2X coins reward button working</li>
          <li>🔊 Sounds and game music improved</li>
          <li>🐛 Bugs Fixed</li>
        </>
      ),
    },
    {
      version: "2.0 Mega Update 2.0 🔥",
      changes: (
        <>
          <li>🔥 Experience the new MEGA UPDATE 2.0!</li>
          <li>🖼️ Entire UI changes</li>
          <li>🌀 2 New Blades</li>
          <li>🎚️ Level Progression XP</li>
          <li>⚙️ Huge performance improvements</li>
          <li>🛒 New shop offers and discounts</li>
          <li>🐛 Bug fixes</li>
        </>
      ),
    },
    {
      version: "2.0.6 🏴‍☠️",
      changes: (
        <>
          <li>📣 Experience the new MEGA UPDATE 2.0!</li>
          <li>🖼️ Entire UI changes</li>
          <li>🌀 2 New Blades</li>
          <li>🎚️ Level Progression XP</li>
          <li>⚙️ Huge performance improvements</li>
          <li>🛒 New shop offers and discounts</li>
          <li>🐛 Bug fixes</li>
        </>
      ),
    },
    {
      version: "2.1.50 ❄️",
      changes: (
        <>
          <li>🛒 2 New Combo Offers in Shop</li>
          <li>☠️ Match abandoned penalty System</li>
          <li>🌀 Last played Blade selected by default</li>
          <li>🤖 Fraud-Cheat detection system</li>
          <li>🥈 Bug Bounty reward system</li>
          <li>🐛 Bug fix and stability improvements</li>
        </>
      ),
    },
    {
      version: "2.1.52 🧭",
      changes: (
        <>
          <li>🐛 A major security bug fixed.</li>
        </>
      ),
    },
    // 🌌🚩🏁🚧🏳️
    //   {
    //     version: "",
    //     changes: <></>,
    //   },
  ];
  return (
    <Flex>
      <div
        style={{
          width: "80%",
          maxWidth: Theme.SPACING(620),
          margin: `${Theme.SPACING(140)} 0 ${Theme.SPACING(80)}`,
        }}>
        <h1 style={{ lineHeight: "1.4" }}>
          Commit History / PlayStore version releases overview
        </h1>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <h2
                style={{
                  fontSize: "20px",
                  color: Theme.COLORS.colors.color_1,
                }}>
                v {item.version}
              </h2>
              <ul>{item.changes}</ul>
              <hr/>
            </div>
          );
        })}
      </div>
    </Flex>
  );
};

export default ChangeLog;
