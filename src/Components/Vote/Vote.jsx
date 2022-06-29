import { Link } from 'react-router-dom';
import './Vote.css'
import VoteCards from "../VoteCards/VoteCards";



function Vote() {
    return (
        <div class="VotePage">

            <div class="VoteIntro">
                <p>TEXTE IMPORTANCE DU VOTE OU CONTEXTE DU VOTE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>

            <div class="CandidateList">
                <VoteCards/>
                <VoteCards/>
                <VoteCards/>
                <VoteCards/>
                <VoteCards/>
                <VoteCards/>
            </div>

            <div class="buttonContainer">


                <Link to="/form" class="ButtonVoteConfirm">
                    Valider
                </Link>

            </div>




        </div>




    );
  }

  export default Vote;
