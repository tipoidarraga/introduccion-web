const $video = document.querySelector ("#video")
        const $play = document.querySelector ("#play")
        const $pause = document.querySelector ("#pause")
        const $forward = document.querySelector ("#forward")
        const $backward = document.querySelector ("#backward")

        $play.addEventListener ("click", handlePlay)
        $pause.addEventListener ("click", handlePause)
        $forward.addEventListener ("click", handleForward)
        $backward.addEventListener ("click", handleBackward)

        function handlePlay () {
            $video.play()
            $play.hidden = true
            $pause.hidden = false
        }

        function handlePause () {
            $video.pause()
            $play.hidden = false
            $pause.hidden = true
        }

        function handleForward () {
            $video.currentTime = $video.currentTime + 10
        }

        function handleBackward () {
            $video.currentTime = $video.currentTime - 10
        }