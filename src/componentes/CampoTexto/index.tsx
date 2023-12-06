import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (value: string) => void
    placeholder: string
    label: string
    value: string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({ aoAlterado, placeholder, label, value, obrigatorio = false, tipo = 'text' }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (event: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={value}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada}
                type={tipo}
            />
        </div>
    )
}

export default CampoTexto