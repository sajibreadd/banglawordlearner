/**
 * Created by tausiftt5238 on 8/4/17.
 */
//var sentences = ["০ (শূন্য)","১ (এক)","২ (দুই)","৩ (তিন)","৪ (চার)","৫ (পাঁচ)","৬ (ছয়)","৭ (সাত)","৮ (আট)","৯ (নয়)"];

var sentences=["শূন্য",
    "এক",
    "দুই",
    "তিন",
    "চার",
    "পাঁচ",
    "ছয়",
    "সাত",
    "আট",
    "নয়",
    "সামনে",
    "পিছে", 
"উপরে", 
"নিচে", 
"ডানে", 
"বামে", 
"চলো", 
"থামো",
"হ্যা",
"না",
"খোলো",
"বন্ধ",
"দ্রুত",
"ধীরে",
"ভাল",
"খারাপ",
"হাত",
"ভিন্ন",
"দিন",
"ভয়",
"সময়",
"বাংলা",
"বিদ্যালয়",
"সুন্দর",
"বৃষ্টি",
"মৃত্তিকা",
"গৃহ",
"কলম"  ];
function LoadFile(newindex) {
    index = newindex;
    document.getElementById("showText").innerHTML = sentences[index];
}

function loadText(element, index){
    console.log("load "+index);
    document.getElementById(element).innerHTML = sentences[index];
}
