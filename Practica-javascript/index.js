
class Ligas {
    constructor(name, teams) {
        this.name = name
        this.teams = teams
        this.grupTeams=[]
        this.arrayteams = []
        this.teamsFourFinal = []
        this.loser = []
        this.win=[]
    }
    iniciar() {
        console.log("comienzan las fases eliminatorias del torneo")
        console.log("se siente la emocion")
        this.grupos()
        console.log('===== CUARTOS DE FINAL =====')
        this.cuartosDeFinal()
        console.log('===== SEMIFINALES =====')
        this.semiFinal()
        console.log('===== TERCER Y CUARTO PUESTO =====')
        this.final()
    }
    grupos() {
        let grupo1=[], grupo2 =[], grupo3 =[], grupo4 =[], index
        let teamsAletorios = function (teams) {
            teams.sort(() => Math.random() - 0.5)
        }
        teamsAletorios(this.teams)
        for (index of this.teams){
            if (grupo1.length < 2) {
                grupo1.push(index)}
            else if (grupo2.length < 2){
                grupo2.push(index)}
            else if (grupo3.length < 2){
                grupo3.push(index)}
            else if (grupo4.length < 2){
                grupo4.push(index)
            }
        }
        
        this.arrayteams.push([...grupo1], [...grupo2], [...grupo3], [...grupo4])
        
        console.log('Equipos que participan en el playoff:')
        console.log('Grupo A: ' + grupo1[0] + ', ' + grupo1[1] + '.')
        console.log('Grupo B: ' + grupo2[0] + ', ' + grupo2[1] + '.')
        console.log('Grupo C: ' + grupo3[0] + ', ' + grupo3[1] + '.')
        console.log('Grupo D: ' + grupo4[0] + ', ' + grupo4[1] + '.')

        

        teamsAletorios(this.arrayteams)
        
        this.grupTeams.push(...this.arrayteams)

     

        
        this.teamsFourFinal.push([this.arrayteams[0][0], this.arrayteams[2][0]],[this.arrayteams[0][1], this.arrayteams[2][1]],[this.arrayteams[1][0], this.arrayteams[3][0]],[this.arrayteams[1][1], this.arrayteams[3][1]],)
        
    }

    cuartosDeFinal() {
        let a, b, index,ganador, d = 1
        this.arrayteams = []
        let c = function () {
            return Math.floor(Math.random() * 10);
        }

        for (index of this.teamsFourFinal) {
            a = c()
            b = c()
            
            if (a === b ) { 
                a++
            }
            if (a > b) {
                this.arrayteams.push(index[0]) 
                ganador= index[0]
            } else if (b > a){
                this.arrayteams.push(index[1])
                ganador= index[1]
            }
            console.log(`Partido ${d}°: ${index[0]} ${a} - ${b} ${index[1]} => ${ganador}`)
            d++
        }
          
    }


    semiFinal() {
        let a,b,d,e,ganador1,ganador2, conditional
        let c = function () {
            return Math.floor(Math.random() * 10);
        }
        a = c()
        b = c() 
        d = c()
        e = c()

        conditional = this.theMacthwhitTeam()

        if (a === b ) { 
                a++
        }

        if (d === e) {
            e++
        }

        if (conditional){

            if (a > b) {
                ganador1=this.ifTeamsEquals(0,1)
            } else if (b>a){
                ganador1=this.ifTeamsEquals(1,0,ganador2)
            }
            if (d > e) {
                ganador2=this.ifTeamsEquals(2,3)
            } else if (e> d){
                ganador2=this.ifTeamsEquals(3,2,ganador2)
            }
        console.log(`${this.arrayteams[0]} ${a} - ${b} ${this.arrayteams[1]} => ${ganador1}`)
        console.log(`${this.arrayteams[2]} ${d} - ${e} ${this.arrayteams[3]} => ${ganador2}`)

        }else{
            if (a > b) {
                ganador1= this.ifTeamsEquals(0,2)
            } else if (b>a){
                ganador1=this.ifTeamsEquals(2,0)
            }
            if (d > e) {
                ganador2=this.ifTeamsEquals(1,3)
            } else if (e> d){
                ganador2=this.ifTeamsEquals(3,1)
            }
            console.log(`${this.arrayteams[0]} ${a} - ${b} ${this.arrayteams[2]} => ${ganador1}`)
             console.log(`${this.arrayteams[1]} ${d} - ${e} ${this.arrayteams[3]} => ${ganador2}`)
        }

        
    }


    final() {
        let four, tree, two, one, a, b, d, e
        let c = function () {
            return Math.floor(Math.random() * 10);
        }
        a = c()
        b = c()
        d = c()
        e = c()
        if (a === b ) { 
                a++
        }
        if (d === e) {
            e++
        }
        if (a > b) {
            tree = this.loser[0]
            four = this.loser[1]
        } else if (b>a){
            tree = this.loser[1]
            four = this.loser[0]
            
        }
        if (d > e) {
            one = this.win[0]
            two = this.win[1]
        } else if (e> d){
             one = this.win[1]
            two = this.win[0]
        }

        console.log(`${this.loser[0]} ${a} - ${b} ${this.loser[1]} => ${tree}`)
        console.log('===== FINAL =====')
        console.log(`${this.win[0]} ${d} - ${e} ${this.win[1]} => ${one}`)
        console.log('===============================================')
        console.log(`De 4° puesto tenemos a: ${four}`)
        console.log(`De 3° puesto tenemos a: ${tree}`)
        console.log(`De 2° puesto tenemos a: ${two}`)
        console.log(`¡ ${one} campeona de la EURO WOMEN’S CUP!`)
        console.log('===============================================')

    }

    ifTeamsEquals(numerArry1,numerArry2){
        let ganador
        ganador = this.arrayteams[numerArry1]
        this.loser.push(this.arrayteams[numerArry2])
        this.win.push(this.arrayteams[numerArry1])
        return ganador
    }

    theMacthwhitTeam(){

        for (const [first,second] of this.grupTeams) {
            for (let index = 0; index < 4; index= index+2 ) {
                
                if (first=== this.arrayteams[index] && second=== this.arrayteams[index+1]) {
                 return  false
                }   
            }
        }
       return true
    }
}

let Campeonato = new Ligas('ligas',['Noruega', 'Inglaterra', 'España', 'Alemania', 'Países Bajos', 'Suiza', 'Francia', 'Islandia'])

Campeonato.iniciar()