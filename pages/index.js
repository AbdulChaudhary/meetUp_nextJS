import MeetupList from "../components/meetups/MeetupList";


const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        address: 'Some address 5, some cite=y 12345',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A first Meetup',
        image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        address: 'Some address 5, some cite=y 12345',
        description: 'This is a first meetup'
    },{
        id: 'm3',
        title: 'A first Meetup',
        image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        address: 'Some address 5, some cite=y 12345',
        description: 'This is a first meetup'
    }
]

const HomePage = () => {
  return( <MeetupList meetups={DUMMY_DATA} />
  )
}

export default HomePage;