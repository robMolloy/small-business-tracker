import Input from "./Input";

const DateTimeInput = (props = {}) => {
  return (
    <Input
      InputLabelProps={{ shrink: true }}
      type="datetime-local"
      {...props}
    />
  );
};

export default DateTimeInput;
