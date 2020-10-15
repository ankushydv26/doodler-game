document.addEventListener('DOMContentLoaded', () => {
    //selecting class grid by querySelector method
    const grid = document.querySelector('.grid')
    //creating div of doodler for 
    const doodler = document.createElement('div')
    let doodlerSpaceLeft = 50
    let doodlerBottomSpace = 250
    let isGamerOver = false
    let platformCount = 5
    let platforms = []
    let upTimerId
    let downTimerId

    function createDoodler() {
        //grid has given child doodler by appendChild method
        grid.appendChild(doodler)
        // adding  style of doodler from s.css of selector doodler
        doodler.classList.add('doodler')
        doodlerSpaceLeft = platforms[0].left
        doodler.style.left = doodlerSpaceLeft + "px"
        doodler.style.bottom = doodlerBottomSpace + "px"
    }
    class Platform {
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom
            this.left = Math.random() * 315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + "px"
            visual.style.bottom = this.bottom + "px"
            grid.appendChild(visual)
        }
    }

    function createPlatforms() {
        for (let i = 0; i < platformCount; i++) {
            //each platform gap  diveded by platcount
            let platGap = 600 / platformCount
            //bttom space each platform
            let newPlatBottom = 100 + i * platGap
            let newPlatform = new Platform(newPlatBottom)
            platforms.push(newPlatform)
            console.log(platforms)

        }
    }

    function movePlatforms() {
        if (doodlerBottomSpace > 200) {
            platforms.forEach(platform => {
                platform.bottom -= 4
                let visual = platform.visual
                visual.style.bottom = platform.bottom + 'px'
            })
        }
    }


    function movePlatforms() {
        if (doodlerBottomSpace > 200) {
            platforms.forEach(platform => {
                platform.bottom -= 4
                let visual = platform.visual
                visual.style.bottom = platform.bottom + 'px'


            })
        }

    }

    function jump() {
        clearInterval(downTimerId)
        upTimerId = setInterval(function (){
            doodlerBottomSpace += 20
            doodler.style.bottom = doodlerBottomSpace + "px"
            if(doodlerBottomSpace > 350){
                fall()
            }
            
        },30)
    }
    function fall(){
        clearInterval(upTimerId)
        downTimerId = setInterval(function() {
            doodlerBottomSpace -= 5
            doodler.style.bottom = doodlerBottomSpace + "px"
            if(doodlerBottomSpace <=0){
                gameOver()
            }

        },30)

    }


    function gameOver(){
        console.log("game over")
        isGamerOver = true
        clearInterval(upTimerId)
        clearInterval(downTimerId)
    }

    function start() {
        if (!isGamerOver) {
            //function call
            createPlatforms()
            createDoodler()
            setInterval(movePlatforms, 30)
            jump()
        }
    }
    //attach to button
    start()
})

