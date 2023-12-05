import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (value: string) => void
    placeholder: string
    label: string
    value: string
    obrigatorio?: boolean
}

const CampoTexto = ({ aoAlterado, placeholder, label, value, obrigatorio = false }: CampoTextoProps) => {

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
            />
        </div>
    )
}

export default CampoTexto