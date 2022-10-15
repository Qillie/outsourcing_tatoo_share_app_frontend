interface ILinkButton {
    children?: (React.ReactElement | (React.ReactElement | false)) | (React.ReactElement | (React.ReactElement | false | undefined))[]
    to: string
}

export default ILinkButton