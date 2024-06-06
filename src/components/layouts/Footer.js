function Footer() {
  return (
    <footer>
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Entre em contato</h5>
              <p className="mb-2">Rua do Exemplo 522, Rio de janeiro, RJ</p>
              <p className="mb-2">021 98745x6123</p>
              <p className="mb-2">exemplo@email.com</p>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <p>
              <span>Rio Imoveis</span> &copy; 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer