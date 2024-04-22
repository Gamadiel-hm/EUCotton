
interface Notification {
    userName: string,
  room: string,
  message: string
}

interface Props {
    message: Notification[]
}

export const Notification: React.FC<Props> = ({message}) => {
    return(
        <>
            {message.map((msg, index) => (
                <div key={index}>
                    <h3>{msg.userName}</h3>
                    <h3>{msg.message}</h3>
                </div>
            ) )}
        </>
    )
}