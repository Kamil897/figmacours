import './JournalItem.css'

export default function JournalItem({title,text,data}){
    return(
        <>
        <h2 className='journal-item_header'>{title}</h2>
        <div className='Journal-item_body'>
            <p className='Journal-item_data'>{data}</p>
            <p className='Journal-item_text'>{text}</p>
        </div>
        </>
    )
}