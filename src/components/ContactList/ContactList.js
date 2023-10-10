import { Component } from 'react'

const ComtactItem = ({ contactItem: { name, number, id } }, onDelete) => {
    return (
        <div> 
            <span>{ name }</span>
            <span>{ number }</span>
            <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    )

}

export class ContactList extends Component  {
    render() {
         const { contacts, onDelete } = this.props;
        return (
            <div>
                <ul>
                    {contacts.map((contact) => (<li key={contact.id}> <ComtactItem
                        contactItem={contact}
                        onDelete={onDelete}/>
                    </li>) 
                )}
                </ul>
            </div>
        )
    }

}
