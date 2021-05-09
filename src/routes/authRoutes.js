const express = require('express');
const authData = require('../model/authData');
const authRouter = express.Router();

function authR(nav){

    // var authors = [
    //     {
    //         authName: 'Matt Haig',
    //         bio: 'Matt Haig is an English novelist and journalist. He has written both fiction and non-fiction for children and adults, often in the speculative fiction genre.',
    //         img:'m-haig.jpg',
    //         bio2: "Haig is the author of both fiction and non-fiction for children and adults.4 His work of non-fiction, Reasons to Stay Alive, was a number one Sunday Times bestseller and was in the UK top 10 for 46 weeks. His bestselling childrens novel, Father Christmas and Me, is currently being adapted for film, produced by Studio Canal and Blueprint Pictures. His novels are often dark and quirky takes on family life. The Last Family in England retells Shakespeares Henry IV, Part 1 with the protagonists as dogs. His second novel Dead Fathers Club is based on Hamlet, telling the story of an introspective 11-year-old dealing with the recent death of his father and the subsequent appearance of his fathers ghost. His third adult novel, The Possession of Mr Cave, deals with an obsessive father desperately trying to keep his teenage daughter safe. His childrens novel, Shadow Forest, is a fantasy that begins with the horrific death of the protagonists parents. It won the Nestlé Childrens Book Prize in 2007.5 He followed it with the sequel, Runaway Troll, in 2008. Haigs vampire novel The Radleys, was published in 2011.6 In 2013, he published The Humans. It is the story of an alien who takes the identity of a university lecturer whose work in mathematics threatens the stability of the planet who must also cope with the home life which accompanies his task. In 2017, Haig published How to Stop Time, a novel about a man who appears to be 40 but has, in fact, lived for more than 400 years and has met Shakespeare, Captain Cook and F. Scott Fitzgerald. In an interview with The Guardian, Haig revealed the book has been optioned by StudioCanal films, and Benedict Cumberbatch had been lined up to star in the film adaptation.7 Reasons to Stay Alive won the Books Are My Bag Readers Awards in 2016 and How to Stop Time was nominated in 2017.8 In August 2018, he wrote lyrics for English singer and songwriter Andy Burrowss music album, the title of which was derived from Haigs book Reasons to Stay Alive. In 2020 Matt Haig released his novel The Midnight Library, which is about a girl called Nora. The night she wants to kill herself, she ends up in The Midnight Library: a library between life and death with millions of books filled with the stories of her life if she had made some decisions differently. In this library, she then tries to find the life in which shes the most content. The Comfort Book will be released on July 1, 2021. The Midnight Library was adapted for radio and broadcast in ten episodes on BBC Radio 4 in December 2020."
    //     },
    //     {
    //         authName: 'Michelle Obama',
    //         bio: 'Michelle LaVaughn Robinson Obama is an American attorney and author who served as the First Lady of the United States from 2009 to 2017. She was the first African-American woman to serve in this position. She is married to the 44th President of the United States, Barack Obama.',
    //         img:'m-obama.jpg',
    //         bio2: "Michelle LaVaughn Robinson Obama1 (née Robinson; born January 17, 1964) is an American attorney and author who served as the First Lady of the United States from 2009 to 2017. She was the first African-American woman to serve in this position. She is married to the 44th President of the United States, Barack Obama. Raised on the South Side of Chicago, Illinois, Obama is a graduate of Princeton University and Harvard Law School. In her early legal career, she worked at the law firm Sidley Austin where she met Barack Obama. She subsequently worked in nonprofits and as the associate dean of Student Services at the University of Chicago as well as the vice president for Community and External Affairs of the University of Chicago Medical Center. Michelle married Barack in 1992, and together they have two daughters. Obama campaigned for her husbands presidential bid throughout 2007 and 2008, delivering a keynote address at the 2008 Democratic National Convention. She has subsequently delivered acclaimed speeches at the 2012, 2016, and 2020 conventions. As first lady, Obama served as a role model for women and worked as an advocate for poverty awareness, education, nutrition, physical activity, and healthy eating. She supported American designers and was considered a fashion icon. After her husbands presidency, her influence remained high; in 2020, Obama topped Gallups poll of the most admired woman in America for the third year running.4"
    //     },
    //     {
    //         authName:"J.K. Rowling",
    //         bio: 'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter.',
    //         img:'rowling.jpg',
    //         bio2: "Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;1 born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,23 becoming the best-selling book series in history.4 The books are the basis of a popular film series, over which Rowling had overall approval on the scripts5 and was a producer on the final films.6 She also writes crime fiction under the pen name Robert Galbraith.Born in Yate, Gloucestershire, Rowling was working as a researcher and bilingual secretary for Amnesty International in 1990 when she conceived the idea for the Harry Potter series while on a delayed train from Manchester to London.7 The seven-year period that followed saw the death of her mother, birth of her first child, divorce from her first husband, and relative poverty until the first novel in the series, Harry Potter and the Philosophers Stone, was published in 1997. There were six sequels, of which the last was released in 2007. Since then, Rowling has written several books for adult readers: The Casual Vacancy (2012) and—under the pseudonym Robert Galbraith—the crime fiction Cormoran Strike series.8 In 2020, her political fairytale for children, The Ickabog, was released in instalments in an online version. Rowling has lived a rags to riches life in which she progressed from living on benefits to being named the worlds first billionaire author by Forbes.10 Rowling disputed the assertion, saying she was not a billionaire.11 Forbes reported that she lost her billionaire status after giving away much of her earnings to charity.12 Her UK sales total in excess of £238 million, making her the best-selling living author in Britain.13 The 2020 Sunday Times Rich List estimated Rowlings fortune at £795 million, ranking her as the 178th richest person in the UK. Time named her a runner-up for its 2007 Person of the Year, noting the social, moral, and political inspiration she has given her fans.15 Rowling was appointed a Member of the Order of the Companions of Honour (CH) in the 2017 Birthday Honours for services to literature and philanthropy. In October 2010, she was named the Most Influential Woman in Britain by leading magazine editors.Rowling has supported multiple charities, including Comic Relief, One Parent Families, and Multiple Sclerosis Society of Great Britain, as well as launching her own charity, Lumos. Since late 2019, Rowling has publicly voiced her opinions on transgender people and related civil rights. These views have been met with controversy."
    //     }
    // ];
    
    authRouter.get('/',function(req, res){
        authData.find()
        .then(function(auth){
            res.render("authors",{
                nav,
                title:'Authors',
                auth
            });
        });
    });

    authRouter.get('/:id',function(req,res){
        const id = req.params.id;
        authData.findOne({_id: id})
        .then(function(auth){
            res.render('author',{
                nav,
                title: auth.name,
                auth
            });
        });
    });

    return authRouter;

}

module.exports = authR;