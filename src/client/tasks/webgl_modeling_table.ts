import * as THREE from '/build/three.module.js'

export const scene: THREE.Scene = new THREE.Scene()

const LEG_WIDTH: number = 0.05
const LEG_HEIGHT: number = 1.5
const LEG_X: number = 0.8
const LEG_Z: number = 0.3
const FACE_WIDTH: number = 2
const FACE_HEIGHT: number = 0.2
const FACE_DEPTH: number = 0.5 * FACE_WIDTH

const faceGeometry = new THREE.BoxGeometry(FACE_WIDTH, FACE_HEIGHT, FACE_DEPTH)
const legGeometry = new THREE.CylinderGeometry(LEG_WIDTH, LEG_WIDTH, LEG_HEIGHT, 32)

let faceMaterial: THREE.MeshNormalMaterial
let leg1Material: THREE.MeshBasicMaterial
let leg2Material: THREE.MeshBasicMaterial
let leg3Material: THREE.MeshBasicMaterial
let leg4Material: THREE.MeshBasicMaterial

const table = new THREE.Group()
let face: THREE.Mesh
let leg1: THREE.Mesh
let leg2: THREE.Mesh
let leg3: THREE.Mesh
let leg4: THREE.Mesh

function init() {

    face = createFace()
    leg1 = createLeg(0x00ff00, leg1Material, LEG_X, 0, LEG_Z)
    leg2 = createLeg(0xffff00, leg2Material, -LEG_X, 0, -LEG_Z)
    leg3 = createLeg(0x00fff0, leg3Material, LEG_X, 0, -LEG_Z)
    leg4 = createLeg(0xf000ff, leg4Material, -LEG_X, 0, LEG_Z)

    scene.background = new THREE.Color(0x333333)

    table.position.y = 0.8
    scene.add(table)
}


function createFace() {
    faceMaterial = new THREE.MeshNormalMaterial()
    const newFace = new THREE.Mesh(faceGeometry, faceMaterial)
    newFace.material.transparent = true
    newFace.position.y = 0.8
    table.add(newFace)

    return newFace
}

function createLeg(color: string | number | THREE.Color, material: THREE.MeshBasicMaterial, x: number, y: number, z: number) {
    material = new THREE.MeshBasicMaterial({ color: color })
    const newLeg = new THREE.Mesh(legGeometry, material)
    newLeg.position.set(x, y, z)
    newLeg.material.transparent = true
    table.add(newLeg)

    return newLeg
}

function render() {
    table.rotation.y += 0.01
}