const meetingTypes = {
  SWS: "Sunday Worship Service",
  MBS: "Monday Bible Study",
  WPF: "Wednesday Prayer & Fasting",
  THR: "Thursday Revival Hour",
  SWT: "Saturday Worker's Trainee",
  GCK: "Globle Crude With Kumuyi",
  OTHR: "Other Meetings",
};

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
