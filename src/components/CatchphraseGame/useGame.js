import { useState, useCallback, useEffect } from 'react';
import { generate } from 'random-words';

export const useGame = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [roundDuration, setRoundDuration] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const getNewWord = useCallback(() => {
    const word = generate();
    setCurrentWord(word);
  }, []);

  const startRound = useCallback(() => {
    if (isPaused) {
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      getNewWord();
      setIsPlaying(true);
      setTimeLeft(roundDuration);
    }
  }, [isPaused, roundDuration, getNewWord]);

  const pauseGame = useCallback(() => {
    setIsPlaying(false);
    setIsPaused(true);
  }, []);

  const handleCorrect = useCallback(() => {
    if (currentTeam === 1) {
      setTeam1Score(prev => prev + 1);
    } else {
      setTeam2Score(prev => prev + 1);
    }
    getNewWord();
  }, [currentTeam, getNewWord]);

  const handleSkip = useCallback(() => {
    getNewWord();
  }, [getNewWord]);

  const endRound = useCallback(() => {
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTeam(team => team === 1 ? 2 : 1);
    setTimeLeft(roundDuration);
    setCurrentWord('');
  }, [roundDuration]);

  const resetGame = useCallback(() => {
    setTeam1Score(0);
    setTeam2Score(0);
    setCurrentTeam(1);
    setTimeLeft(roundDuration);
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentWord('');
  }, [roundDuration]);

  const handleTimeChange = useCallback((seconds) => {
    const newDuration = Number(seconds);
    setRoundDuration(newDuration);
    if (!isPlaying) {
      setTimeLeft(newDuration);
    }
  }, [isPlaying]);

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            clearInterval(timer);
            endRound();
            return roundDuration;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, roundDuration, endRound]);

  return {
    currentWord,
    timeLeft,
    roundDuration,
    isPlaying,
    isPaused,
    team1Score,
    team2Score,
    currentTeam,
    handleCorrect,
    handleSkip,
    startRound,
    pauseGame,
    resetGame,
    handleTimeChange,
  };
};