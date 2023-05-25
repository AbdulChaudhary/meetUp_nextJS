import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetUpPage = () => {
  const formMeetUpHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData)
  }
  return <NewMeetupForm onAddMeetup={formMeetUpHandler} />
}

export default NewMeetUpPage