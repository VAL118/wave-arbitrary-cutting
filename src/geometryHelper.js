/**
 * @classdesc
 * Core
 *
 * @class Core
 * @this {Core}
 * @author sogimu@nxt.ru Aleksandr Lizin aka sogimu
 */

(function(namespace) {
    var GeometryHelper = function() {

        var me = {};

        me.createBoxGeometry = function(geometryDimension, volumeSize, zFactor) {
          // geometryDimension["xmin"]=0.9;
            var vertexPositions = [
                // //front face first
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // //front face second
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                //
                // // back face first
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // // back face second
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                //
                // // top face first
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // // top face second
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                //
                // // bottom face first
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // // bottom face second
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                //
                // // right face first
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // // right face second
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                //
                // // left face first
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // // left face second
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]]


                //front face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax/300.0 * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax/300.0 * volumeSize[2]],
                //front face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax/300.0 * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],

                // back face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // back face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],

                // top face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // top face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],

                // bottom face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // bottom face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],

                // right face first
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [(geometryDimension.xmax/300.0) * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // right face second
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [(geometryDimension.xmax/300.0) * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [(geometryDimension.xmax/300.0) * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],

                // left face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // left face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]]
            ];

            var vertexColors = [
                //front face first
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax/300.0],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax/300.0],
                //front face second
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax/300.0],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],

                // back face first
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
                // back face second
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],

                // top face first
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
                // top face second
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],

                // bottom face first
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
                // bottom face second
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],

                // right face first
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
                [(geometryDimension.xmax/300.0), geometryDimension.ymax, geometryDimension.zmax],
                // right face second
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
                [(geometryDimension.xmax/300.0), geometryDimension.ymax, geometryDimension.zmax],
                [(geometryDimension.xmax/300.0), geometryDimension.ymin, geometryDimension.zmax],

                // left face first
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
                // left face second
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin]
            ];

            var positions = [];
            var colors = [];

            for(var i = 0; i < vertexPositions.length; i++) {
                var backCounter = vertexPositions.length - 1 - i;
                var x = vertexPositions[backCounter][0];
                var y = vertexPositions[backCounter][1];
                var z = vertexPositions[backCounter][2] * zFactor;

                var r = vertexColors[backCounter][0];
                var g = vertexColors[backCounter][1];
                var b = vertexColors[backCounter][2];

                positions.push(x);
                positions.push(y);
                positions.push(z);

                colors.push(r);
                colors.push(g);
                colors.push(b);
                colors.push(1.0);
            }

            var geometry = new THREE.BufferGeometry();
            var bufferPositions = new Float32Array(positions);
            geometry.addAttribute( 'position', new THREE.BufferAttribute( bufferPositions, 3 ) );
            geometry.addAttribute( 'vertColor', new THREE.BufferAttribute(new Float32Array(colors), 4));
            //geometry.computeBoundingSphere();
            geometry.computeBoundingBox();

            return geometry;
        }


        me.isVisible = function(x0,y0,z0,x,y,z,camx,camy,camz){
          camVecX=camx-x0;
          camVecY=camy-y0;
          camVecZ=camz-z0;
          // The face is visible if the angle between the normal to the face and the viewpoint is acute.
          ab = x * camVecX + y * camVecY + z * camVecZ; //scalar product of vectors
          a = Math.sqrt(Math.pow(x, 2.0) + Math.pow(y, 2.0) + Math.pow(z, 2.0));
          b = Math.sqrt(Math.pow(camVecX, 2.0) + Math.pow(camVecY, 2.0) + Math.pow(camVecZ, 2.0));
          if (Math.acos(ab/(a*b)) < 1.57){
            return true;
          }
          else{
            return false;
          }
        }

        me.createBoxGeometry1 = function(geometryDimension, volumeSize, zFactor, aX, aY, aZ, bX, bY, bZ, cX, cY, cZ, dX, dY, dZ, camX, camY, camZ) {



          //   _______
          //  |---c---|
          //  |a-----b| front face
          //  |---d---|
          //  TTTTTTTTT
          //
          // geometryDimension["xmin"]=0.9;
            // console.log("")
          // console.log("LLLLLLLLLLL");

          // console.log("Yfffff = ",camY);
          // console.log("aZ = ",aZ);
          // console.log("bX = ",bX);
          // console.log("bZ = ",bZ);


            //edges x0,y0,z0:
            //front: 0,0,1; back: 0,0,-1; top: 0,1,0; bot: 0,-1,0; right: 1,0,0; left: -1,0,0
            // if(me.isVisible(0,0,0.5,0,0,1.5,camX,0,camZ)){console.log("1")}; //front
            // if(me.isVisible(0,0,-0.5,0,0,-1.5,camX,0,camZ)){console.log("2")}; //back


            bcX = bX + cX;
            bcY = bY + cY;
            bcZ = bZ + cZ;

            bdX = bX + dX;
            bdY = bY + dY;
            bdZ = bZ + dZ;

            adX = aX + dX;
            adY = aY + dY;
            adZ = aZ + dZ;

            acX = aX + cX;
            acY = aY + cY;
            acZ = aZ + cZ;

            // if(me.isVisible(0,0.5,0,0,1.5,0,camX,camY,camZ)){console.log("3")}; //top
            // if(me.isVisible(0,-0.5,0,0,-1.5,0,camX,camY,camZ)){console.log("4")}; //bot

            // if(me.isVisible(0.5,0,0,1.5,0,0,camX,0,camZ)){console.log("5")}; //right
            // if(me.isVisible(-0.5,0,0,-1.5,0,0,camX,0,camZ)){console.log("6")}; //left

            var vertexPositions = [
                //front face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax/300.0 * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax/300.0 * volumeSize[2]],
                //front face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax/300.0 * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],

                // back face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // back face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],

                // top face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax/300.0 * volumeSize[2]],
                // top face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax/300.0 * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin/300.0 * volumeSize[2]],

                // bottom face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // bottom face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],

                // right face first
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [(geometryDimension.xmax/300.0) * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // right face second
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [(geometryDimension.xmax/300.0) * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [(geometryDimension.xmax/300.0) * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],

                // left face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // left face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]]
            ]; //old

            var vertexColors = [
                //front face first
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax/300.0],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax/300.0],
                //front face second
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax/300.0],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],

                // back face first
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
                // back face second
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],

                // top face first
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax/300.0],
                // top face second
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax/300.0],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin/300.0],

                // bottom face first
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
                // bottom face second
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],

                // right face first
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
                [(geometryDimension.xmax/300.0), geometryDimension.ymax, geometryDimension.zmax],
                // right face second
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
                [(geometryDimension.xmax/300.0), geometryDimension.ymax, geometryDimension.zmax],
                [(geometryDimension.xmax/300.0), geometryDimension.ymin, geometryDimension.zmax],

                // left face first
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
                // left face second
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin]
            ]; //old

            var vertexPositions = [
                //front face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                //front face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // back face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // back face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // top face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // top face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                // bottom face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // bottom face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // right face first
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [(geometryDimension.xmax) * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // right face second
                [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [(geometryDimension.xmax) * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [(geometryDimension.xmax) * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // left face first
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                // left face second
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
                [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]]
            ];

            var vertexColors = [
                //front face first
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
                //front face second
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
                // back face first
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
                // back face second
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
                // top face first
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
                // top face second
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
                // bottom face first
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
                // bottom face second
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
                // right face first
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
                [(geometryDimension.xmax), geometryDimension.ymax, geometryDimension.zmax],
                // right face second
                [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
                [(geometryDimension.xmax), geometryDimension.ymax, geometryDimension.zmax],
                [(geometryDimension.xmax), geometryDimension.ymin, geometryDimension.zmax],
                // left face first
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
                // left face second
                [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
                [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin]
            ];



            if(me.isVisible(0,0,0.5,0,0,1.5,camX,camY,camZ)){  //front
              vertexPositions[0] = [adX * volumeSize[0], adY * volumeSize[1], adZ * volumeSize[2]];
              vertexPositions[1] = [bdX * volumeSize[0], bdY * volumeSize[1], bdZ * volumeSize[2]];
              vertexPositions[2] = [bcX * volumeSize[0], bcY * volumeSize[1], bcZ * volumeSize[2]];

              vertexPositions[3] = [adX * volumeSize[0], adY * volumeSize[1], adZ * volumeSize[2]];
              vertexPositions[4] = [bcX * volumeSize[0], bcY * volumeSize[1], bcZ * volumeSize[2]];
              vertexPositions[5] = [acX * volumeSize[0], acY * volumeSize[1], acZ * volumeSize[2]];

              vertexColors[0] = [adX, adY, adZ];
              vertexColors[1] = [bdX, bdY, bdZ];
              vertexColors[2] = [bcX, bcY, bcZ];

              vertexColors[3] = [adX, adY, adZ];
              vertexColors[4] = [bcX, bcY, bcZ];
              vertexColors[5] = [acX, acY, acZ];
            };

            if(me.isVisible(0,0,-0.5,0,0,-1.5,camX,camY,camZ)){  //back
              vertexPositions[6] = [bdX * volumeSize[0], bdY * volumeSize[1], bdZ * volumeSize[2]];
              vertexPositions[7] = [bcX * volumeSize[0], bcY * volumeSize[1], bcZ * volumeSize[2]];
              vertexPositions[8] = [acX * volumeSize[0], acY * volumeSize[1], acZ * volumeSize[2]];

              vertexPositions[9] = [bdX * volumeSize[0], bdY * volumeSize[1], bdZ * volumeSize[2]];
              vertexPositions[10] = [acX * volumeSize[0], acY * volumeSize[1], acZ* volumeSize[2]];
              vertexPositions[11] = [adX * volumeSize[0], adY * volumeSize[1], adZ * volumeSize[2]];

              vertexColors[6] = [bdX, bdY, bdZ];
              vertexColors[7] = [bcX, bcY, bcZ];
              vertexColors[8] = [acX, acY, acZ];

              vertexColors[9] = [bdX, bdY, bdZ];
              vertexColors[10] = [acX, acY, acZ];
              vertexColors[11] = [adX, adY, adZ];
            };

            //   _______
            //  |---c---|
            //  |a-----b| front face
            //  |---d---|
            //  TTTTTTTTT

            if(me.isVisible(0,0.5,0,0,1.5,0,camX,camY,camZ)){ //top
              vertexPositions[12] = [adX * volumeSize[0], adY * volumeSize[1], adZ * volumeSize[2]];
              vertexPositions[13] = [bdX * volumeSize[0], bdY * volumeSize[1], bdZ * volumeSize[2]];
              vertexPositions[14] = [bcX * volumeSize[0], bcY * volumeSize[1], bcZ * volumeSize[2]];

              vertexPositions[15] = [adX * volumeSize[0], adY * volumeSize[1], adZ * volumeSize[2]];
              vertexPositions[16] = [bcX * volumeSize[0], bcY * volumeSize[1], bcZ * volumeSize[2]];
              vertexPositions[17] = [acX * volumeSize[0], acY * volumeSize[1], acZ * volumeSize[2]];

              vertexColors[12] = [adX, adY, adZ];
              vertexColors[13] = [bdX, bdY, bdZ];
              vertexColors[14] = [bcX, bcY, bcZ];

              vertexColors[15] = [adX, adY, adZ];
              vertexColors[16] = [bcX, bcY, bcZ];
              vertexColors[17] = [acX, acY, acZ];
            };

            if(me.isVisible(0,-0.5,0,0,-1.5,0,camX,camY,camZ)){ //bot
              vertexPositions[18] = [acX * volumeSize[0], acY * volumeSize[1], acZ * volumeSize[2]];
              vertexPositions[19] = [adX * volumeSize[0], adY * volumeSize[1], adZ * volumeSize[2]];
              vertexPositions[20] = [bdX * volumeSize[0], bdY * volumeSize[1], bdZ * volumeSize[2]];

              vertexPositions[21] = [acX * volumeSize[0], acY * volumeSize[1], acZ * volumeSize[2]];
              vertexPositions[22] = [bdX * volumeSize[0], bdY * volumeSize[1], bdZ* volumeSize[2]];
              vertexPositions[23] = [bcX * volumeSize[0], bcY * volumeSize[1], bcZ * volumeSize[2]];

              vertexColors[18] = [acX, acY, acZ];
              vertexColors[19] = [adX, adY, adZ];
              vertexColors[20] = [bdX, bdY, bdZ];

              vertexColors[21] = [acX, acY, acZ];
              vertexColors[22] = [bdX, bdY, bdZ];
              vertexColors[23] = [bcX, bcY, bcZ];
            };

            if(me.isVisible(0.5,0,0,1.5,0,0,camX,camY,camZ)){  //right
              vertexPositions[24] = [bdX * volumeSize[0], bdY * volumeSize[1], bdZ * volumeSize[2]],
              vertexPositions[25] = [bcX * volumeSize[0], bcY * volumeSize[1], bcZ * volumeSize[2]],
              vertexPositions[26] = [acX * volumeSize[0], acY * volumeSize[1], acZ * volumeSize[2]],

              vertexPositions[27] = [bdX * volumeSize[0], bdY * volumeSize[1], bdZ * volumeSize[2]],
              vertexPositions[28] = [acX * volumeSize[0], acY * volumeSize[1], acZ * volumeSize[2]],
              vertexPositions[29] = [adX * volumeSize[0], adY * volumeSize[1], adZ * volumeSize[2]],

              vertexColors[24] = [bdX, bdY, bdZ];
              vertexColors[25] = [bcX, bcY, bcZ];
              vertexColors[26] = [acX, acY, acZ];

              vertexColors[27] = [bdX, bdY, bdZ];
              vertexColors[28] = [acX, acY, acZ];
              vertexColors[29] = [adX, adY, adZ];
            };

            if(me.isVisible(-0.5,0,0,-1.5,0,0,camX,camY,camZ)){  //left
              vertexPositions[30] = [adX * volumeSize[0], adY * volumeSize[1], adZ * volumeSize[2]];
              vertexPositions[31] = [bdX * volumeSize[0], bdY * volumeSize[1], bdZ * volumeSize[2]];
              vertexPositions[32] = [bcX * volumeSize[0], bcY * volumeSize[1], bcZ * volumeSize[2]];

              vertexPositions[33] = [adX * volumeSize[0], adY * volumeSize[1], adZ * volumeSize[2]];
              vertexPositions[34] = [bcX * volumeSize[0], bcY * volumeSize[1], bcZ * volumeSize[2]];
              vertexPositions[35] = [acX * volumeSize[0], acY * volumeSize[1], acZ * volumeSize[2]];

              vertexColors[30] = [adX, adY, adZ];
              vertexColors[31] = [bdX, bdY, bdZ];
              vertexColors[32] = [bcX, bcY, bcZ];

              vertexColors[33] = [adX, adY, adZ];
              vertexColors[34] = [bcX, bcY, bcZ];
              vertexColors[35] = [acX, acY, acZ];
            };




      //       if(camX<camZ && camZ>0.0){
      //
      //           var vertexPositions = [
      //             // // //front face first
      //             [aX * volumeSize[0], geometryDimension.ymin * volumeSize[1], aZ * volumeSize[2]],
      //             [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]],
      //             [bX * volumeSize[0], geometryDimension.ymax * volumeSize[1], bZ * volumeSize[2]],
      //             //front face second
      //             [aX * volumeSize[0], geometryDimension.ymin * volumeSize[1], aZ * volumeSize[2]],
      //             [bX * volumeSize[0], geometryDimension.ymax * volumeSize[1], bZ * volumeSize[2]],
      //             [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ * volumeSize[2]],
      //             // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             // //front face second
      //             // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             // [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             // [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //
      //             // // back face first
      //             // [aX * volumeSize[0], geometryDimension.ymin * volumeSize[1], aZ * volumeSize[2]],
      //             // [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ * volumeSize[2]],
      //             // [bX * volumeSize[0], geometryDimension.ymax * volumeSize[1], bZ * volumeSize[2]],
      //             // // back face second
      //             // [aX * volumeSize[0], geometryDimension.ymin * volumeSize[1], aZ * volumeSize[2]],
      //             // [bX * volumeSize[0], geometryDimension.ymax * volumeSize[1], bZ* volumeSize[2]],
      //             // [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]],
      //             // back face first
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             // back face second
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //
      //
      //             // top face first
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             // top face second
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //
      //             // bottom face first
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             // bottom face second
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //
      //             // right face first
      //             // [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]],
      //             // [bX * volumeSize[0], geometryDimension.ymax * volumeSize[1], bZ * volumeSize[2]],
      //             // [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ * volumeSize[2]],
      //             // // right face second
      //             // [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]],
      //             // [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ * volumeSize[2]],
      //             // [aX * volumeSize[0], geometryDimension.ymin * volumeSize[1], aZ * volumeSize[2]],
      //             // // right face first
      //             [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [(geometryDimension.xmax) * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             // right face second
      //             [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [(geometryDimension.xmax) * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             [(geometryDimension.xmax) * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //
      //             // // left face first
      //             // [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]],
      //             // [aX * volumeSize[0], geometryDimension.ymin * volumeSize[1], aZ * volumeSize[2]],
      //             // [bX * volumeSize[0], geometryDimension.ymax * volumeSize[1], bZ * volumeSize[2]],
      //             // // left face second
      //             // [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]],
      //             // [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ * volumeSize[2]],
      //             // [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ * volumeSize[2]]
      //             // left face first
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             // left face second
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //             [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]]
      //         ];
      //
      //         var vertexColors = [
      //             // // //front face first
      //             [aX, geometryDimension.ymin, aZ],
      //             [bX, geometryDimension.ymin, bZ],
      //             [bX, geometryDimension.ymax, bZ],
      //             //front face second
      //             [aX, geometryDimension.ymin, aZ],
      //             [bX, geometryDimension.ymax, bZ],
      //             [aX, geometryDimension.ymax, aZ],
      //             // [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
      //             // [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
      //             // [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
      //             // //front face second
      //             // [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
      //             // [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
      //             // [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
      //
      //             // // back face first
      //             // [aX, geometryDimension.ymin, aZ],
      //             // [aX, geometryDimension.ymax, aZ],
      //             // [bX, geometryDimension.ymax, bZ],
      //             // // back face second
      //             // [aX, geometryDimension.ymin, aZ],
      //             // [bX, geometryDimension.ymax, bZ],
      //             // [bX, geometryDimension.ymin, bZ],
      //             // back face first
      //             [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
      //             [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
      //             [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
      //             // back face second
      //             [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
      //             [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
      //             [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
      //
      //             // top face first
      //             [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
      //             [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
      //             [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
      //             // top face second
      //             [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
      //             [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
      //             [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
      //
      //             // bottom face first
      //             [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
      //             [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
      //             [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
      //             // bottom face second
      //             [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
      //             [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
      //             [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
      //
      //             // right face first
      //             // [bX, geometryDimension.ymin, bZ],
      //             // [bX, geometryDimension.ymax, bZ],
      //             // [aX, geometryDimension.ymax, aZ],
      //             // // right face second
      //             // [bX, geometryDimension.ymin, bZ],
      //             // [aX, geometryDimension.ymax, aZ],
      //             // [aX, geometryDimension.ymin, aZ],
      //
      //             // // right face first
      //             [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
      //             [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
      //             [(geometryDimension.xmax), geometryDimension.ymax, geometryDimension.zmax],
      //             // right face second
      //             [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
      //             [(geometryDimension.xmax), geometryDimension.ymax, geometryDimension.zmax],
      //             [(geometryDimension.xmax), geometryDimension.ymin, geometryDimension.zmax],
      //
      //             // // left face first
      //             // [bX, geometryDimension.ymin, bZ],
      //             // [aX, geometryDimension.ymin, aZ],
      //             // [bX, geometryDimension.ymax, bZ],
      //             // // left face second
      //             // [bX, geometryDimension.ymin, bZ],
      //             // [aX, geometryDimension.ymax, aZ],
      //             // [aX, geometryDimension.ymax, aZ]
      //             // left face first
      //             [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
      //             [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
      //             [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
      //             // left face second
      //             [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
      //             [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
      //             [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin]
      //         ];
      //     }
      //
      //     else
        //   if(camX>camZ && camX>0.0){
        //
        //     var vertexPositions = [
        //       // // //front face first
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       //front face second
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //
        //       // back face first
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //       // back face second
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //
        //
        //       // top face first
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       // top face second
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //
        //       // bottom face first
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       // bottom face second
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //
        //       // right face first
        //       [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]],
        //       [bX * volumeSize[0], geometryDimension.ymax * volumeSize[1], bZ * volumeSize[2]],
        //       [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ * volumeSize[2]],
        //       // right face second
        //       [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]],
        //       [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ * volumeSize[2]],
        //       [aX * volumeSize[0], geometryDimension.ymin * volumeSize[1], aZ * volumeSize[2]],
        //
        //       // left face first
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       // left face second
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
        //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]]
        //   ];
        //
        //   var vertexColors = [
        //       // // //front face first
        //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
        //       [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
        //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
        //       //front face second
        //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
        //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
        //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
        //
        //       // back face first
        //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
        //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
        //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
        //       // back face second
        //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
        //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
        //       [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
        //
        //       // top face first
        //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
        //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
        //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
        //       // top face second
        //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
        //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
        //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
        //
        //       // bottom face first
        //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
        //       [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
        //       [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
        //       // bottom face second
        //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
        //       [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
        //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
        //
        //       // right face first
        //       [bX, geometryDimension.ymin, bZ],
        //       [bX, geometryDimension.ymax, bZ],
        //       [aX, geometryDimension.ymax, aZ],
        //       // right face second
        //       [bX, geometryDimension.ymin, bZ],
        //       [aX, geometryDimension.ymax, aZ],
        //       [aX, geometryDimension.ymin, aZ],
        //
        //       // left face first
        //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
        //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
        //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
        //       // left face second
        //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
        //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
        //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin]
        //   ];
        // }
      //   else{
      //       var vertexPositions = [
      //       // // //front face first
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       //front face second
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //
      //       // back face first
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       // back face second
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //
      //
      //       // top face first
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       // top face second
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //
      //       // bottom face first
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       // bottom face second
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //
      //       // // right face first
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [(geometryDimension.xmax) * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       // right face second
      //       [geometryDimension.xmax * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [(geometryDimension.xmax) * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       [(geometryDimension.xmax) * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //
      //       // left face first
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       // left face second
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymin * volumeSize[1], geometryDimension.zmin * volumeSize[2]],
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmax * volumeSize[2]],
      //       [geometryDimension.xmin * volumeSize[0], geometryDimension.ymax * volumeSize[1], geometryDimension.zmin * volumeSize[2]]
      //   ];
      //
      //   var vertexColors = [
      //       // // //front face first
      //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
      //       [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
      //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
      //       //front face second
      //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
      //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
      //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
      //       // back face first
      //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
      //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
      //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
      //       // back face second
      //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
      //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
      //       [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
      //
      //       // top face first
      //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
      //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
      //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
      //       // top face second
      //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin],
      //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmax],
      //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
      //
      //       // bottom face first
      //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
      //       [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
      //       [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
      //       // bottom face second
      //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
      //       [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmax],
      //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
      //
      //       // // right face first
      //       [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
      //       [geometryDimension.xmax, geometryDimension.ymax, geometryDimension.zmin],
      //       [(geometryDimension.xmax), geometryDimension.ymax, geometryDimension.zmax],
      //       // right face second
      //       [geometryDimension.xmax, geometryDimension.ymin, geometryDimension.zmin],
      //       [(geometryDimension.xmax), geometryDimension.ymax, geometryDimension.zmax],
      //       [(geometryDimension.xmax), geometryDimension.ymin, geometryDimension.zmax],
      //
      //       // left face first
      //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
      //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
      //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
      //       // left face second
      //       [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
      //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
      //       [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin]
      //   ];
      // }

            var positions = [];
            var colors = [];

            for(var i = 0; i < vertexPositions.length; i++) {
                var backCounter = vertexPositions.length - 1 - i;
                var x = vertexPositions[backCounter][0];
                var y = vertexPositions[backCounter][1];
                var z = vertexPositions[backCounter][2] * zFactor;

                var r = vertexColors[backCounter][0];
                var g = vertexColors[backCounter][1];
                var b = vertexColors[backCounter][2];

                positions.push(x);
                positions.push(y);
                positions.push(z);

                colors.push(r);
                colors.push(g);
                colors.push(b);
                colors.push(1.0);
            }

            var geometry = new THREE.BufferGeometry();
            var bufferPositions = new Float32Array(positions);
            geometry.addAttribute( 'position', new THREE.BufferAttribute( bufferPositions, 3 ) );
            geometry.addAttribute( 'vertColor', new THREE.BufferAttribute(new Float32Array(colors), 4));
            //geometry.computeBoundingSphere();
            geometry.computeBoundingBox();

            return geometry;
        }


        return me;

    };

    namespace.GeometryHelper = GeometryHelper;

})(window.VRC);
// if(me.isVisible(0,0,-0.5,0,0,-1.5,camX,0,camZ)){  //back
//   vertexPositions[6] = [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]];
//   vertexPositions[7] = [bX * volumeSize[0], geometryDimension.ymax * volumeSize[1], bZ * volumeSize[2]];
//   vertexPositions[8] = [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ * volumeSize[2]];
//
//   vertexPositions[9] = [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]];
//   vertexPositions[10] = [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ* volumeSize[2]];
//   vertexPositions[11] = [aX * volumeSize[0], geometryDimension.ymin * volumeSize[1], aZ * volumeSize[2]];
//
//   vertexColors[6] = [bX, geometryDimension.ymin, bZ];
//   vertexColors[7] = [bX, geometryDimension.ymax, bZ];
//   vertexColors[8] = [aX, geometryDimension.ymax, aZ];
//
//   vertexColors[9] = [bX, geometryDimension.ymin, bZ];
//   vertexColors[10] = [aX, geometryDimension.ymax, aZ];
//   vertexColors[11] = [aX, geometryDimension.ymin, aZ];
// };
//
//
// if(me.isVisible(0.5,0,0,1.5,0,0,camX,0,camZ)){  //right
//   vertexPositions[24] = [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]],
//   vertexPositions[25] = [bX * volumeSize[0], geometryDimension.ymax * volumeSize[1], bZ * volumeSize[2]],
//   vertexPositions[26] = [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ * volumeSize[2]],
//
//   vertexPositions[27] = [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]],
//   vertexPositions[28] = [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ * volumeSize[2]],
//   vertexPositions[29] = [aX * volumeSize[0], geometryDimension.ymin * volumeSize[1], aZ * volumeSize[2]],
//
//   vertexColors[24] = [bX, geometryDimension.ymin, bZ];
//   vertexColors[25] = [bX, geometryDimension.ymax, bZ];
//   vertexColors[26] = [aX, geometryDimension.ymax, aZ];
//
//   vertexColors[27] = [bX, geometryDimension.ymin, bZ];
//   vertexColors[28] = [aX, geometryDimension.ymax, aZ];
//   vertexColors[29] = [aX, geometryDimension.ymin, aZ];
// };
//
// if(me.isVisible(-0.5,0,0,-1.5,0,0,camX,0,camZ)){  //left
//   vertexPositions[30] = [aX * volumeSize[0], geometryDimension.ymin * volumeSize[1], aZ * volumeSize[2]];
//   vertexPositions[31] = [bX * volumeSize[0], geometryDimension.ymin * volumeSize[1], bZ * volumeSize[2]];
//   vertexPositions[32] = [bX * volumeSize[0], geometryDimension.ymax * volumeSize[1], bZ * volumeSize[2]];
//
//   vertexPositions[33] = [aX * volumeSize[0], geometryDimension.ymin * volumeSize[1], aZ * volumeSize[2]];
//   vertexPositions[34] = [bX * volumeSize[0], geometryDimension.ymax * volumeSize[1], bZ * volumeSize[2]];
//   vertexPositions[35] = [aX * volumeSize[0], geometryDimension.ymax * volumeSize[1], aZ * volumeSize[2]];
//
//   vertexColors[30] = [aX, geometryDimension.ymin, aZ];
//   vertexColors[31] = [bX, geometryDimension.ymin, bZ];
//   vertexColors[32] = [bX, geometryDimension.ymax, bZ];
//
//   vertexColors[33] = [aX, geometryDimension.ymin, aZ];
//   vertexColors[34] = [bX, geometryDimension.ymax, bZ];
//   vertexColors[35] = [aX, geometryDimension.ymax, aZ];
// };
//
// // left face first
// [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
// [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmax],
// [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
// // left face second
// [geometryDimension.xmin, geometryDimension.ymin, geometryDimension.zmin],
// [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmax],
// [geometryDimension.xmin, geometryDimension.ymax, geometryDimension.zmin]
