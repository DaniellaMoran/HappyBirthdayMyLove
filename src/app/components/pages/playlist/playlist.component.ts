import { song } from './../../../interfaces/song';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  songs: song[] = [
    {
      title: "I just called to say I love you",
      artist: "Stevie Wonder",
      songCover: "../../../../assets/imgs/iJustCalled.jpg",
      audioSrc: "../../../../assets/sounds/i_just_called_to_say.mp3",
      text: ["זה השיר שלנו.","השיר שבו רמזנו אחד לשנייה שאנחנו אוהבים אחד השנייה.","אני זוכרת שהייתי באוטו כששמעתי את הפלייליסט שהכנת לי, ובין היתר את השיר הזה.", "את השיר הזה שמעתי בקורס בזמן שלמדתי או עבדתי, וחשבתי עליך.", "על אהוב ליבי.", "~", "אני אוהבת להתקשר אליך ברנדומליות ופשוט להגיד לך שאני אוהבת אותך."]
    },
    {
      title: "איך אפשר שלא",
      artist: "ג'יין בורדו",
      songCover: "../../../../assets/imgs/howCanOne.jpg",
      audioSrc: "../../../../assets/sounds/HowCanOne.mp3",
      text: ["אכן - איך אפשר שלא להתאהב בך?","אתה כזה רגיש,", "חכם,", "מצחיק,", "אכפתי,", "קשוב,", "בוגר,", "חתיך,", "עם תחת לא מהעולם הזה,", "אוהב,", "ובעיקר גוש גושי בוןבון בוןבוני."]
    },
    {
      title: "Lone Digger",
      artist: "Caravan Palace",
      songCover: "../../../../assets/imgs/loneDigger.jpg",
      audioSrc: "../../../../assets/sounds/LoneDigger.mp3",
      text: ["הצלצול שלך בטלפון.","כל פעם שאני שומעת אותו, אני ישר חושבת עליך.", "יש לו אנרגיות טובות ברמות, וזה בזכותך.", "הוא מזכיר לי את הדייטים הראשונים שלנו, כשנסענו באוטו של אבא שלך למקומות.", "זה תמיד יהיה השיר שלך בעיניי."]
    },
    {
      title: "A Sky Full of Stars",
      artist: "Coldplay",
      songCover: "../../../../assets/imgs/skyFullOfStars.jpg",
      audioSrc: "../../../../assets/sounds/skyFullOfStars.mp3",
      text: ["אתה הכוכבים שלי.","באלי לקחת אותך, ", "רק שנינו, ", "לדייט מתחת לכוכבים עם איזו שמיכה ואולי כמה דברים לנשנש,", "ופשוט להנות איתך מהנוף.", "אתה הכוכבים המנצנצים שלי בשמיים, ", "אתה האור של חיי."]
    },
    {
      title: "I Can't Help Myself",
      artist: "The Four Tops",
      songCover: "../../../../assets/imgs/iCantHelpMyself.jfif",
      audioSrc: "../../../../assets/sounds/SugarPie.mp3",
      text: ["את השיר הזה הייתי שומעת בלופים בקורס.","חשבתי עליך כל הזמן.", "על זה שאני פשוט לא מסוגלת לעצור את עצמי, ", "אני פשוט אוהבת אותך."]
    },
    {
      title: "Zou Bisou Bisou",
      artist: "Gillian Hills",
      songCover: "../../../../assets/imgs/zuBizuBIzu.jpg",
      audioSrc: "../../../../assets/sounds/zuBizu.mp3",
      text: ["דרך השיר הזה היינו מתקשרים בקורס ביוטיוב.","היית מגיב שם, ואני הייתי קוראת.", "אני זוכרת איך היה לי קשה לא לדבר איתך כל היום, ופחדתי שזה יפגע לנו בקשר, אז הייתי חייבת למצוא דרך.", "וגם היינו שרים את השיר הזה אחד לשני בבקרים אחרי שישנו אחד אצל השנייה."]
    },
    {
      title: "כלב ים",
      artist: "צפריונה",
      songCover: "../../../../assets/imgs/seal.jfif",
      audioSrc: "../../../../assets/sounds/צפריונה_כלב_ים.mp3",
      text: ["אין צורך בפירוט.","כלב ים. כלב ים.כלב ים.כלב ים.","כלב ים.כלב ים.כלב ים.כלב ים.", "שלג צח,", "מלט רך,", "כסף לח,", "בטן גב.", "סבל עז,", "הרג רב,", "הלם קרב, ", "כלב צב.","כלב ים. כלב ים.כלב ים.כלב ים.","כלב ים.כלב ים.כלב ים.כלב ים.",]
    },
    {
      title: "Love You Like A Love Song",
      artist: "Selena Gomez",
      songCover: "../../../../assets/imgs/loveYouLikeALoveSong.jpg",
      audioSrc: "../../../../assets/sounds/Selena_Gomez_Love_You_Like_a_Love_Song_Lyrics_.mp3",
      text: ["כשרק התאהבתי בך, ","שהתאהבתי לראשונה בחיים, ", "כל כך הזדהיתי עם השיר הזה ולא הפסקתי לשיר אותו ולשמוע אותו.", "אני אוהבת אותך כמו בשיר אהבה.", "אף אחד לא משתווה אליך.", "אין כמוך ליו שלי."]
    },
    {
      title: "Just Dance",
      artist: "Lady Gaga",
      songCover: "../../../../assets/imgs/justDAnce.jpg",
      audioSrc: "../../../../assets/sounds/Just_Dance_Lady_Gaga_Feat_Colby_O_Donis_Lyri.mp3",
      text: ["אמרת לי שכשאתה שומע את השיר הזה, הוא מזכיר לך אותי.","אולי בגלל הריקודים, אולי בגלל הנסיעות שבחרתי בהן שירים כשרק התחלנו לצאת."]
    },
    {
      title: "Telephone",
      artist: "Lady Gaga",
      songCover: "../../../../assets/imgs/telephoneLadyGaga.jpg",
      audioSrc: "../../../../assets/sounds/TELEPHONE___LADY_GAGA_FT_BEYONCÉ___LYRICS.mp3",
      text: ["אמרתי לך שהששיר הזה מזכיר לי אותך?","לא בגלל התוכן שלו,", "בגלל ששרנו אותו ביחד כשרק התחלנו לצאת ונתת לי לבחור שירים באוטו.", "מאז הפלייליסט התרחב וכבר יש לנו עוד המון שירים, אבל השיר הזה מזכיר לי את ההתחלה שלנו."]
    },
    {
      title: "Domino",
      artist: "Jessie J",
      songCover: "../../../../assets/imgs/dominoJese.jpg",
      audioSrc: "../../../../assets/sounds/Jessie_J_Domino_Official_Video_.mp3",
      text: ["זה שיר ממש כיפי","ששנינו אוהבים.", "נחמד לשים אותו באוטו ולשיר."]
    },
    {
      title: "Until I Found You",
      artist: "Stephen Sanchez",
      songCover: "../../../../assets/imgs/untilIFoundYOu.jpg",
      audioSrc: "../../../../assets/sounds/Stephen_Sanchez_Until_I_Found_You_Piano_Versi.mp3",
      text: ["אתה בטח זוכר שכשרק התחלנו לצאת,","וגם קצת יותר מאוחר,", "היה לי קשה עם העבר הרומנטי שלך.", "הרגשתי מאויימת, שאולי אני ריבאונד, שאולי זה לא אמיתי,", "ואתה הוכחת לי כל פעם מחדש שאין לי מה לדאוג, ושאתה אוהב אותי, והיית מאוד מכיל ואוהב לגבי הנושא הזה.", "בשיר הזה, הוא אומר שהוא לא חשב שיתאהב שוב עד שמצא את הבחורה שאליה הוא מדבר.", "אהבתי לשמוע אותו איתך כי זה גרם לי להבין שבאמת הכל היה ונגמר, ושהתחלת תקופה חדשה,", "התקופה שלנו."]
    },
    {
      title: "Darling",
      artist: "Kana Nishino",
      songCover: "../../../../assets/imgs/darling.jfif",
      audioSrc: "../../../../assets/sounds/Nishino_Kana_Darling.mp3",
      text: ["אתה זוכר שישבנו במסעדה מןטןטן שאתה כל כך אוהב?","וששמענו שירים מגניבים ביפנית?", "אז זה השיר שלנו משם,", "שאין לי שום מושג מה הוא אומר אבל אני יכולה להבין.", "אתה האוב שלי, וזה שיר אהבה.", "הוספתי אותו לפלייליסט והכל."]
    },
    {
      title: "Sway",
      artist: "Michael Bublé",
      songCover: "../../../../assets/imgs/sway.jpg",
      audioSrc: "../../../../assets/sounds/Michael_Bublé_Sway_Official_Lyric_Video_.mp3",
      text: ["השיר הזה אמנם מאוד מאוד פופולארי, ","והוא בכלל לא מיוחד, ", "אבל אני מאוד התחברתי אליו וחשבתי עליך כששמעתי אותו בקורס."]
    }
  ];
  songIndex: number = 0;
  currentSong: song = this.songs[this.songIndex];
  audio: any;
  currentSliding: string = "";
  indication: number = 0;

  ngOnInit(): void {
    this.audio = new Audio();
    this.audio.src = this.currentSong.audioSrc;
    this.audio.load();
    this.audio.play();
  }

  ngOnDestroy() {
    this.audio.pause();
  }

  toggleAudio(){
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  slideOut(indication: number){
    this.currentSliding = `slide${indication}`;
    this.indication = indication;

    setTimeout(()=> {
      this.switchSong();
    }, 1150);
  }

  switchSong(){
    this.songIndex += this.indication;

    if (this.songIndex >= this.songs.length)
      this.songIndex = 0;
    else if (this.songIndex < 0)
      this.songIndex = this.songs.length - 1;

    this.currentSong = this.songs[this.songIndex];

    this.audio.src = this.currentSong.audioSrc;
    this.audio.load();
    this.audio.play();
  }

  animationened(){
    this.currentSliding = ``;
  }
}
