// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.

                /** Create KineticJS Stage */
                initStage();

            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();


    function initStage() {
        var stage = new Kinetic.Stage({
            width: 800, height: 600, container: 'container'
        });

        var bgLayer = new Kinetic.Layer();
        var mainLayer = new Kinetic.Layer();

        var backgroundRect = new Kinetic.Rect({
            width: 800, height: 600, fill: 'white'
        });
        bgLayer.add(backgroundRect);

        var bouncer = new Kinetic.Rect({
            x: Math.max(0, Math.floor(Math.random() * 800 - 50)),
            y: Math.max(0, Math.floor(Math.random() * 600 - 50)),
            width: 50, height: 50, fill: 'black'
        });

        bouncer.bounds = {
            top: 0, left: 0,
            right: stage.getWidth() - bouncer.getWidth(),
            bottom: stage.getHeight() - bouncer.getHeight()
        };

        bouncer.collision = function () {
            if (this.getX() <= this.bounds.left) return 'left'
            if (this.getX() >= this.bounds.right) return 'right'
            if (this.getY() <= this.bounds.top) return 'top'
            if (this.getY() >= this.bounds.bottom) return 'bottom'
        };
        bouncer.direction = 2 * Math.PI * Math.random();
        bouncer.velocity = {
            x: 20 * Math.cos(bouncer.direction),
            y: 20 * Math.sin(bouncer.direction)
        };

        var bouncerAnim = new Kinetic.Animation(function (frame) {
            var delta = frame.timeDiff / 1000;

            var collision = bouncer.collision();
            if (collision === 'left' || collision === 'right')
                bouncer.velocity.x = -bouncer.velocity.x;
            if (collision === 'top' || collision == 'bottom')
                bouncer.velocity.y = -bouncer.velocity.y;

            bouncer.setX(bouncer.getX() + delta * bouncer.velocity.x);
            bouncer.setY(bouncer.getY() + delta * bouncer.velocity.y);

        }, mainLayer);
        
        mainLayer.add(bouncer);

        stage.add(bgLayer);
        stage.add(mainLayer);

        bouncerAnim.start();
    }

})();
