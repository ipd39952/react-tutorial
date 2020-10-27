import React from "react";

const BirthdayReminder = () => {
  let data = [
    {
      name: "Bertie Yates",
      age: 29,
      picture:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
      name: "Dvalo Yakov",
      age: 24,
      picture:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
      name: "Sean Walsh",
      age: 32,
      picture:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
      name: "Lola Gardner",
      age: 29,
      picture:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
    {
      name: "Bertie Yates",
      age: 29,
      picture:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
  ];
  const [birthdays, setBirthdays] = React.useState(data);
  return (
    <>
      <div
        class="container"
        style={{ background: "rgb(174, 199, 105)", width: "50%" }}
      >
        <h3 style={{ padding: "20px" }}>{birthdays.length} birthdays today</h3>
        {birthdays.map((birthday) => {
          return (
            <div>
              <img
                src={birthday.picture}
                alt=""
                height="100px"
                width="100px"
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  margin: "20px",
                }}
              />
              <h4>{birthday.name}</h4>
              <i>{birthday.age} years</i>
            </div>
          );
        })}
        <button
          className="btn"
          onClick={() => setBirthdays([])}
          style={{ margin: "10px" }}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default BirthdayReminder;
