import React from 'react';
import {Footer} from './Footer.jsx'

export class SummaryFooter extends React.Component{
    
    render(){
        return(
            <div className="summaryFooter">

                <ol>Objaśnienia:
                <li>
                    Wypełnia się w każdym przypadku przedkładania któregokolwiek z wykazów zawartych
                    w załącznikach nr 2 i 3 do rozporządzenia Ministra Środowiska z dnia 13 grudnia 2018 r. w sprawie
                    wykazów zawierających informacje i dane o zakresie korzystania ze środowiska oraz o wysokości
                    należnych opłat.
                </li>
                <li>
                    Należy podać rok, którego dotyczy wykaz.
                </li>
                <li>
                    Oznaczenie literowe tabel w załącznikach nr 2 i 3 do rozporządzenia Ministra Środowiska z dnia 13 grudnia
                    2018 r. w sprawie wykazów zawierających informacje i dane o zakresie korzystania ze środowiska oraz
                    o wysokości należnych opłat; należy podkreślić kod tej tabeli, którą dany podmiot korzystający ze
                    środowiska wypełnił.
                </li>
                <li>
                    Zaokrągla się do pełnych złotych w ten sposób, że końcówkę kwoty mniejszą niż 50 groszy pomija się,
                    a końcówkę kwoty wynoszącą 50 groszy i więcej podwyższa się do pełnych złotych.
                </li>
                <li>
                    Suma opłat za poszczególne rodzaje korzystania ze środowiska, określonych w wierszach I i II; nie wlicza
                    się do niej opłat z tytułu tych rodzajów korzystania ze środowiska, których roczna wysokość nie przekracza
                    800 zł
                </li>
            </ol>

            <p>Pouczenie</p>
            <p>
                Zawarte w wykazie informacje o wysokości należnych opłat stanowią podstawę do wystawienia tytułu
                wykonawczego, zgodnie z przepisami ustawy z dnia 17 czerwca 1966 r. o postępowaniu egzekucyjnym
                w administracji (Dz. U. z 2018 r. poz. 1314, 1356, 1499, 1629, 2192, 2193 i 2432).
            </p>
            
            <Footer />
        </div>

)
}
}