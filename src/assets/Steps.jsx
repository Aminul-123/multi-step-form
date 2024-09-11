import AllSteps from "./AllSteps";

export default function Steps() {
    const steps = [
      {
        id: 1,
        stepDetails: "YOUR INFO",
      },
      {
        id: 2,
        stepDetails: "SELECT PLAN",
      },
      {
        id: 3,
        stepDetails: "ADD-ONS",
      },
      {
        id: 4,
        stepDetails: "SUMMARY",
      },
    ];
    return (
      <>
        <div className="steps">
          {steps.map((step) => {
            return (
              <div className="allSteps" key={step.id}>
                <AllSteps step={step} />
              </div>
            );
          })}
        </div>
      </>
    );
  }