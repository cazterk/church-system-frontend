const meetingTypes = {
  SWS: "Sunday Worship Service",
  MBS: "Monday Bible Study",
  WPF: "Wednesday Prayer & Fasting",
  THR: "Thursday Revival Hour",
  SWT: "Saturday Worker's Trainee",
  GCK: "Globle Crude With Kumuyi",
  OTHR: "Other Meetings",
};

export const meetingTypesSetter = [
  {
    value: "",
    label: "----------",
  },
  {
    value: 1,
    label: "Sunday Worship Service",
  },

  {
    value: 2,
    label: "Monday  Bible Study ",
  },
  {
    value: 3,
    label: "Wednesday Prayer & Fasting",
  },
  {
    value: 4,
    label: "Thursday Revival Hour",
  },
  {
    value: 5,
    label: "Saturday Worker's Trainee",
  },
  {
    value: 6,
    label: "Globle Crude With Kumuyi",
  },
  {
    value: 7,
    label: "Other Meetings",
  },
];

export const getMeeting = (value: number) => {
  switch (value) {
    case 1:
      return meetingTypes.SWS;
    case 2:
      return meetingTypes.MBS;
    case 3:
      return meetingTypes.WPF;
    case 4:
      return meetingTypes.THR;
    case 5:
      return meetingTypes.SWT;
    case 6:
      return meetingTypes.GCK;
    default:
      return meetingTypes.OTHR;
  }
};
