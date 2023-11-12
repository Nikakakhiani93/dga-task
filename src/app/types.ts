export type Tcourse = {
  id: number;
  course_name: string;
  course_difficulty: string;
  teacher_id: string;
  start_date: string;
  end_date: string;
};

export type Tstudent = {
  id: number;
  name: string;
  email: string;
  phone: string;
  personal_number: string;
};

export type Tpayment = {
  id: 1;
  Name: string;
  Payment_Schedule: string;
  Bill_Number: string;
  Amount_Paid: string;
  Balance_amount: string;
  Date: string;
};
