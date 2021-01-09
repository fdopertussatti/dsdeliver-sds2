function StepsHeader() {
    return (
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    SIGA AS <br /> ETAPAS
                </h1>
                <ul className="steps-items"> 
                    <li>
                        <samp className="steps-number">1</samp>
                        Selecione os produtos e localização.
                    </li>
                    <li>
                        <samp className="steps-number">2</samp>
                        Depois clique em <strong>ENVIAR PEDIDO</strong>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default StepsHeader;