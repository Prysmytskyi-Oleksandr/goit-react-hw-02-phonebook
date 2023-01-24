import ContactItem from './ContactItem/ContactItem';
// import styles from './contactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ol>
      {contacts.map(contact => (
        <ContactItem
          contact={contact}
          deleteContact={deleteContact}
          key={contact.id}
        />
      ))}
    </ol>
  );
};

export default ContactList;

// export default function ContactList({ contacts }) {
//   return (
//     <ul>
//       {contacts.map(contact => (
//         <ContactItem contact={contact} key={contact.id} />
//       ))}
//     </ul>
//   );
// }
