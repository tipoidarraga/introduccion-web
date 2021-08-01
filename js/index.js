        const $video = document.querySelector ("#video")
        const $play = document.querySelector ("#play")
        const $pause = document.querySelector ("#pause")
        const $forward = document.querySelector ("#forward")
        const $backward = document.querySelector ("#backward")
        const $progress = document.querySelector ("#progress")

        $play.addEventListener ("click", handlePlay)
        $pause.addEventListener ("click", handlePause)
        $forward.addEventListener ("click", handleForward)
        $backward.addEventListener ("click", handleBackward)
        $video.addEventListener ('loadedmetadata', handleLoaded)
        $video.addEventListener ('ltimeupdated', handleTimeUpdate)
        $progress.addEventListener ('input', handleInput)

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

        // Son un espacio
        
        function handleLoaded () {
            $progress.max = $video.duration
        }
        
        
        function handleTimeUpdate () {
            $progress.value = $video.currentTime
        }
        
        
        function handleInput () {
            $video.currentTime = $progress.value
        }
        
