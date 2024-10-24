export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    variant?: string;
    onClick?: () => void
}

export interface IButtonStyled{
    variant: string
} 