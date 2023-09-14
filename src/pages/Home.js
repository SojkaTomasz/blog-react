import tomekFoto from "../images/TomaszSojka.jpg.jpg"
import "../styles/home.css"

function Home() {
	return (
		<div>
			<h1 className='title-section'>Home</h1>
			<div className='box-img-home'>
				<img className='img-home' src={tomekFoto} alt='' />
				<div style={{textAlign: 'center'}}>
					<a href='https://github.com/SojkaTomasz'>
						<i class='fa-brands fa-github icon-home'></i>
					</a>

					<a href='https://www.linkedin.com/in/tomasz-sojka-867130119/'>
						<i class='fa-brands fa-linkedin icon-home'></i>
					</a>
				</div>
			</div>
			<div>
				<p className='txt-home'>Cześć jestem Tomek, </p>
				<p className='txt-home'>
					Cieszę się, że masz chwilę, aby rzucić okiem na ten projekt oparty na React.
					Chciałbym Cię przywitać na moim blogu, który stanowi demonstrację moich
					umiejętności i zaangażowania w rozwijanie aplikacji webowych.
				</p>
				<p className='txt-home'>
					W ramach tego projektu, stworzyłem dynamiczny blog z różnorodnymi
					funkcjonalnościami. Zaimplementowałem mechanizmy rejestracji, logowania oraz
					odzyskiwania hasła, które umożliwiają użytkownikom spersonalizowane
					doświadczenie. Kluczowym aspektem jest ograniczenie dostępu do artykułów jedynie
					dla zalogowanych użytkowników, co miało na celu zwiększenie interakcji na
					stronie.
				</p>
				<p className='txt-home'>
					Warto zwrócić uwagę na konto administratora, które posiada uprawnienia do
					zarządzania treścią. Dzięki niemu, mogę dodawać, edytować oraz usuwać artykuły
					poprzez intuicyjny panel administracyjny. Uważam, że to istotna funkcjonalność,
					pozwalająca na skuteczne zarządzanie zawartością witryny.
				</p>
				<p className='txt-home'>
					Ponadto, przygotowałem specjalne konto poglądowe, które umożliwia wgląd w
					funkcjonalności konta administratora, jednakże z ograniczeniem pewnych działań,
					takich jak zmiana hasła i adresu e-mail oraz edycja, dodawanie i usuwanie
					artykułów. Wprowadziłem te ograniczenia z myślą o bezpieczeństwie.
				</p>
				<p className='txt-home'>
					Jeśli chcesz zobaczyć mój projekt, serdecznie zapraszam do zalogowania się za
					pomocą poniższych danych:
				</p>
				<ul style={{ paddingLeft: 20 }}>
					<li style={{ marginBottom: "0.5rem" }}>
						<strong>Login:</strong> test@test.com
					</li>
					<li style={{ marginBottom: "0.5rem" }}>
						<strong>Hasło:</strong> Test123!@#
					</li>
				</ul>
				<p className='txt-home'>
					Dziękuję za poświęcenie czasu na zapoznanie się z moimi umiejętnościami i
					projektem.
				</p>
				<p className='txt-home'>Pozdrawiam</p>
				<p className='txt-home'>Tomek</p>
			</div>
		</div>
	)
}

export default Home
