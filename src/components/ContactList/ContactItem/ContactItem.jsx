// import styles from '../contactList.module.css';

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <li key={contact.id}>
      <p>
        {contact.name}: {contact.number}
      </p>

      <button
        // className={styles.button}
        type="button"
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

// export default function ContactItem({ contact }) {
//   return (
//     <li key={contact.id}>
//       <p>
//         {contact.name}: {contact.number}
//       </p>
//     </li>
//   );
// }
