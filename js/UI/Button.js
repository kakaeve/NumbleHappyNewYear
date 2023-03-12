export default function Button({$target,url,insertClassList,icon}){
    this.$button = document.createElement('div')
    this.$button.classList.add('button')
    for(let c of insertClassList){
        this.$button.classList.add(c)
    }
    this.$anchorTag = document.createElement('a')
    this.$anchorTag.href=url
    this.$anchorTag.innerHTML = icon
    this.$button.append(this.$anchorTag)
    $target.append(this.$button)
}